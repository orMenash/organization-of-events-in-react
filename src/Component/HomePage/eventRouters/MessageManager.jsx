import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function () {
  const [message, setmessage] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3010/users/alarmUser", { id: localStorage.id })
      .then((res) => {
        console.log(res);

        if (res.data.docs) {
          setmessage(res.data.docs);
        }
      });
  }, []);

  function MarkIt(item, index) {
    axios
      .post("http://localhost:3010/users/UpdateAlarmUser", { id: item.idUser })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "הודעה סומנה כנקראה  !",
          showConfirmButton: false,
          timer: 1500,
        });
        const numArray = message.filter(
          (element) => ![message[index]].includes(element)
        );
        setmessage(numArray);
        if (message.length === 0) {
          setmessage([]);
        }
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        console.log(err);
      });
  }
  if (message.length === 0) {
    return <h1>{"אין לך הודעות חדשות .."}</h1>;
  } else {
    return (
      <>
        <h2>הודעות אחרונות ממנהל המערכת ..</h2>
        <br />
        <ul>
          {message.map((item, index) => {
            return (
              <li key={index}>
                {JSON.stringify(item.msg)}
                <br />
                <br />{" "}
                <button
                  onClick={() => {
                    MarkIt(item, index);
                  }}
                >
                  סמן כטופל
                </button>
                <hr />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
