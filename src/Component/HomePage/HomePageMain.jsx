import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import ShowAllEvents from "./eventRouters/ShowAllEvents";
import ViewPastEvents from "./eventRouters/ViewPastEvents";
import Menu from "./eventRouters/Menu";
import ChatObEvent from "./eventRouters/ChatObEvent";
import ChatObEvent2 from "./eventRouters/ChatObEvent2";
import CreateEvent from "./eventRouters/CreateEvent";
import Pay from "../PayPal/Pay";
import MessageManager from "./eventRouters/MessageManager";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WarpMyBar from "../WarpMyBar";
import LocationReceiver from "../location/get_location";
import Show_map_coords from "../location/show_map_coords";

export default () => {
  const [cookiesToken, setcookiesToken] = useCookies(["Token"]);
  const [cookiesuserName, setcookiesuserName] = useCookies(["UserName"]);
  const navigate = useNavigate();
  const [eventClick, setEventClick] = useState(null);

  useEffect(() => {
    if (cookiesToken.Token !== null) {
      axios
        .post(`${process.env.REACT_APP_BASIC_URL_SERVER}/checkAuth`, { token: cookiesToken.Token })
        .then((response) => {
          {
          }
        })
        .catch((data) => {
          navigate("../");
        });
    }
  });

  useEffect(() => {
    eventClick == null && navigate("");
  }, [eventClick]);

  return (
    <>

    
        <Routes>
          <Route path="" element={<Menu />} />
          <Route
            path="ShowAllEvents"
            element={<ShowAllEvents setEventClick={setEventClick} />}
          />
          <Route
            path="ChatObEvent"
            element={<ChatObEvent2 eventClick={eventClick} />}
          />
          <Route
            path="GetMap"
            element={<Show_map_coords eventClick={eventClick} />}
          />
          <Route path="MessageManager" element={<MessageManager />} />
          <Route
            path="CreateEvent"
            element={<CreateEvent setEventClick={setEventClick} />}
          />
          <Route
            path="ViewPastEvents"
            element={<ViewPastEvents setEventClick={setEventClick} />}
          />


          <Route path="pay" element={<Pay setEventClick={setEventClick} />} />
        </Routes>



      {/* <WarpMyBar body={
      <Routes>
        <Route path="" element={<Menu />} />
        <Route
          path="ShowAllEvents"
          element={<ShowAllEvents setEventClick={setEventClick} />}
        />
        <Route
          path="ChatObEvent"
          element={<ChatObEvent2 eventClick={eventClick} />}
        />
        <Route path="MessageManager" element={<MessageManager />} />
        <Route
          path="CreateEvent"
          element={<CreateEvent setEventClick={setEventClick} />}
        />
        <Route
          path="ViewPastEvents"
          element={<ViewPastEvents setEventClick={setEventClick} />}
        />
       

        <Route path="pay" element={<Pay setEventClick={setEventClick} />} />
      </Routes>

      }/> */}

    </>
  );
};
