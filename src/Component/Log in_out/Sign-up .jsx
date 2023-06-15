import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default () => {
  const firstName = useRef("");
  const LastName = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  async function inputSignUp(event) {
    event.preventDefault();
    const photoUser = await fetch("https://picsum.photos/200");

    axios
      .post(`${process.env.BASIC_URL_SERVER}/users/signup`, {
        Name1: firstName.current.value,
        Name2: LastName.current.value,
        pass: password.current.value,
        photoUser: photoUser.url,
      })
      .then((data) => {
        navigate("/Login");
        console.log(data);
      });
  }
  return (
    <div className="Auth-form-container">
      <form
        className="Auth-form"
        onSubmit={(event) => {
          inputSignUp(event);
        }}
      >
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">הרשמות לאתר !</h2>
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
              placeholder="Password"
              ref={password}
              required
            />
          </div>
          <br />
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              הירשם !
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="Login">יש לי חשבון ! </a>
          </p>
        </div>
      </form>
    </div>
  );
};
