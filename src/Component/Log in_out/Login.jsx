import React, { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login () {
  const navigate = useNavigate();
  const [cookiesToken, setcookiesToken] = useCookies(["Token"]);
  const [cookiesuserName, setcookiesuserName] = useCookies(["UserName"]);
  const firstName = useRef("");
  const LastName = useRef("");
  const password = useRef("");

  useEffect(() => {
    if (cookiesToken.Token !== null) {
      axios
        .post("http://localhost:3010/checkAuth", { token: cookiesToken.Token })
        .then((response) => {
          if (
            window.confirm(
              " ברוך הבא" + response.data.Good + " ! \nלהמשיך עם החשבון הזה ?"
            ) === true
          ) {
            navigate("/HomePageMain");
            let text = "You pressed OK!";
            console.log(text);
          } else {
            setcookiesToken(["Token"], "null");
            setcookiesuserName(["UserName"], "null");
          }
        })
        .catch((data) => {
          console.log(data);
        });
    }
  }, []);

  function inputLogin(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3010/users/Login", {
        Name1: firstName.current.value,
        Name2: LastName.current.value,
        pass: password.current.value,
      })
      .then((response) => {
        console.log(response);
        setcookiesToken("Token", response.data.token);
        setcookiesuserName("UserName", response.data.message);
        localStorage.id = response.data.id;
        let timerInterval;
        Swal.fire({
          title: "Success !",
          html: "I will close in <b></b> milliseconds.",
          html: "You will immediately be transferred to the home page..",
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {}, 850);
          },
          willClose: () => {
            clearInterval(timerInterval);
            navigate("/HomePageMain");
          },
        });

        console.log(response);
      })
      .catch((data) => {
        console.log(data);
        Swal.fire({
          icon: "error",
          title: "Oops...",
        });
      });
  }
  return (
    <div className="Auth-form-container">
      <form
        className="Auth-form"
        onSubmit={(event) => {
          inputLogin(event);
        }}
      >
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">הכנס !</h2>
          <div className="form-group mt-3">
            <hr />
            <label>שם פרטי</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="שם פרטי"
              ref={firstName}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>משפחה</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="משפחה"
              ref={LastName}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>סיסמא</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="סיסמא"
              ref={password}
              required
            />
          </div>
          <br />
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            כניסת <a href="admin">מנהל</a> ..
          </p>
          <p className="forgot-password text-right mt-2">
            <a href="ResetPass">שכחתי את הסיסמא שלי ..</a>
          </p>
          <p className="forgot-password text-right mt-2">
            <a href="Signup"> צור חשבון </a>
          </p>
        </div>
      </form>
    </div>
  );
}
