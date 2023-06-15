import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
export default () => {
  const [cookiesuserName, setcookiesuserName] = useCookies(["UserName"]);
  const [arrEvent, setArrEnent] = useState(null);
  const [arrActive, setArrActive] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${process.env.BASIC_URL_SERVER}/admin/allEventsAdmin`).then((res) => {
      setArrEnent(res.data.GetIt);
      setArrActive(res.data.arr);
    });
  }, []);
  
  useEffect(() => {}, [arrEvent]);

  function changeStatusEvent(info, index) {
    const dilema = arrActive[index] === "לא פעיל" ? "פעיל" : "לא פעיל";
    let newArr = [...arrActive];
    newArr[index] = dilema;
    setArrActive(newArr);
    console.log(arrActive);

    const boolStatus = arrEvent[index].Active ? false : true;
    arrEvent[index].Active = arrEvent[index].Active ? false : true;
    console.log(arrEvent);
    axios
      .post(`${process.env.BASIC_URL_SERVER}/admin/changeEvent`, {
        Name: cookiesuserName.UserName,
        IdEvent: info._id,
        boolStatus: boolStatus,
      })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "שונה בהצלחה !",
          showConfirmButton: false,
          timer: 1500,
        });

        console.log(res);
      });
  }
  return (
    <>
      <h1 dir="rtl" style={{ textAlign: "center" }}>
        כל האירועים כאן !
      </h1>
      <br />
      <br />
      <div className="container text-center">
        <div className="row">
          {arrEvent &&
            arrEvent.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      style={{
                        width: "18rem",
                        height: "12rem",
                        backgroundSize: "cover",
                        float: "left",
                      }}
                      src={item.photoUser}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 dir="rtl" className="card-title">
                        {item.NameEvent}
                      </h5>
                      <p dir="rtl" className="card-text">
                        {item.Date}
                      </p>
                      <p dir="rtl" className="card-text">
                        {arrActive[index]}
                      </p>
                      <p
                        className="btn btn-primary"
                        onClick={() => {
                          changeStatusEvent(item, index);
                        }}
                      >
                        שנה סטאטוס !
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
