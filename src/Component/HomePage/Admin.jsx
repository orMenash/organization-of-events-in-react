import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import ShowAllEvents from "./eventRouters/ShowAllEvents";
import ChatObEvent from "./eventRouters/ChatObEvent";
import CreateEvent from "./eventRouters/CreateEvent";
import ShowAllUsers from "./eventRouters/AdminIn/ShowAllUsers";
import ChangeEvent from "./eventRouters/AdminIn/ShowAllEventsAndChange";
import DeletingUser from "./eventRouters/AdminIn/DeletingUser";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AdminMenu from "./eventRouters/AdminIn/AdminMenu";
import axios from "axios";
import WarpMyBar from "../WarpMyBar";
import Swal from "sweetalert2";
export default () => {
  const navigate = useNavigate();
  const [cookiesToken, setcookiesToken] = useCookies(["Token"]);
  const [cookiesuserName, setcookiesuserName] = useCookies(["UserName"]);
  const [eventClick, setEventClick] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  function sweetAlert() {
    (async () => {
      const { value: formValues } = await Swal.fire({
        title: "כניסת מנהל !",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="שם פרטי"> ' +
          '<input id="swal-input1" class="swal2-input" placeholder="משפחה"> ' +
          '<input id="swal-input2" class="swal2-input" placeholder="סיסמא">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input2").value,
          ];
        },
      });

      if (formValues) {
        axios
          .post("http://localhost:3010/users/Login", {
            Name1: formValues[0],
            Name2: formValues[1],
            pass: formValues[2],
          })
          .then((response) => {
            console.log(response);
            if (response.data.isAdmin === "true") {
              setcookiesToken("Token", response.data.token);
              setcookiesuserName("UserName", response.data.message);
              localStorage.id = response.data.id;
              setIsAdmin(true);
            }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire("Erorr !");
            navigate("/");
          });
      }
    })();
  }
  useEffect(() => {
    sweetAlert();
  }, []);
  if (isAdmin) {
    return (
      <>
        <WarpMyBar
          body={
            <Routes>
              <Route path="" element={<AdminMenu />} />
              <Route
                path="ShowAllEvents"
                element={<ShowAllEvents setEventClick={setEventClick} />}
              />
              <Route
                path="ChatObEvent"
                element={<ChatObEvent eventClick={eventClick} />}
              />
              <Route
                path="CreateEvent"
                element={<CreateEvent setEventClick={setEventClick} />}
              />
              <Route
                path="ShowAllUsers"
                element={<ShowAllUsers setEventClick={setEventClick} />}
              />
              <Route
                path="changeEvent"
                element={<ChangeEvent setEventClick={setEventClick} />}
              />
              <Route
                path="DeletingUser"
                element={<DeletingUser setEventClick={setEventClick} />}
              />
            </Routes>
          }
        />
      </>
    );
  }
};
