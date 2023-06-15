import { React, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import Chat1 from "../../chat/Chat1";
import Chat2 from "../../chat/Char2";
import "./chatOb.css"


const socketIOClient = io(process.env.REACT_APP_BASIC_URL_SERVER);

export default (props) => {
  const [cookiesUserName, setcookiesUserName] = useCookies(["UserName"]);
  const refValue = useRef();
  const [arrMes, setMgs] = useState([]);
  const navigate = useNavigate();
  const { eventClick } = props;


  useEffect(() => {
    getData()
    socketIOClient.on(
      "message",
      (message, UserName, idEvent, timeMass) => {
        if (idEvent === eventClick.NameEvent) {
          setMgs((current) => [
            ...current,
            { messages: message, from: UserName, timeMass: timeMass },
          ]);

        }
      }
    );

    return () => {
      socketIOClient.off('message');
    };
  }, []);

  async function getData() {
    if (props.eventClick) {
      const status200 = await axios.post(
        `${process.env.REACT_APP_BASIC_URL_SERVER}/event/EventChat`,
        { IdEvent: eventClick.NameEvent }
      );
      setMgs(status200.data.TakeIt[0].EventMessages);
    }
  }

  async function sendComm() {
    const d = new Date(
      Date.UTC(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds(),
        new Date().getMilliseconds()
      )
    );
    let time_text = d.toISOString();
    
    socketIOClient.emit(
      "message",
      refValue.current.value,
      cookiesUserName.UserName,
      eventClick.NameEvent,
      time_text
    );

    const status200 = await axios.post(
      `${process.env.REACT_APP_BASIC_URL_SERVER}/event/EventChat`,
      {
        IdEvent: eventClick.NameEvent,
        from: cookiesUserName.UserName,
        messages: refValue.current.value,
      }
    );

    refValue.current.value = "";
  }

  if (props.eventClick) {

    return (
      <>
        <ol style={{ display: "flex", flexDirection: "column" }} dir="rtl">

          <div className="fixedContainer">
            <div id="h4_ChatObEvent">
              <h1>{props.eventClick.NameEvent}</h1>
              <h2>{props.eventClick.Date.slice(0, 10)}</h2>
            </div>
          </div>

          {arrMes.map((item, index) => {
            if (item.from) {
              if (cookiesUserName.UserName == item.from) {
                return (
                  <Chat1
                    key={index}
                    text={item.messages}
                    time={
                      item.timeMass.substring(0, 10) +
                      " " +
                      item.timeMass.substring(11, 19)
                    }
                    from={item.from}
                  />
                );
              } else if (cookiesUserName.UserName !== item.from) {
                return (
                  <Chat2
                    key={index}
                    text={item.messages}
                    time={
                      item.timeMass.substring(0, 10) +
                      " " +
                      item.timeMass.substring(11, 19)
                    }
                    from={item.from}
                  />
                );
              }
            } else {
              return <p>אין תגובות עדיין !</p>;
            }
          })}
        </ol>
        {props.eventClick.Active && (
          <div id="inputSendComm">
            <label htmlFor="Ab">
              שלח תגובה ..
              <input className="input_chat" type="text" name="Ab" ref={refValue} />
            </label>
            <button
              onClick={() => {
                sendComm();
                
              }}
            >
              תגובה{" "}
            </button>
          </div>
        )}

      </>
    );
  } else {
    navigate("");
  }
};
