import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default (props) => {
  const { setEventClick } = props;
  const [arrEvent, setArrEnent] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    
    axios.get(`${process.env.REACT_APP_BASIC_URL_SERVER}/event/allEvents`).then((res) => { 
      
      setArrEnent(res.data.GetIt);
    });
  }, []);

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
                      <p
                        className="btn btn-primary"
                        onClick={() => {
                          setEventClick(item);
                          navigate("../ChatObEvent");
                        }}
                      >
                        צ'אט
                      </p>
                      <p
                        className="btn btn-primary"
                        onClick={() => {
                          setEventClick(item);
                          navigate("../GetMap");
                        }}
                      >
                        מיקום
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
