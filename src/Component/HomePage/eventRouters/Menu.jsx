import { useNavigate } from "react-router-dom";
import TodoMain1 from "../../../Img/TodoMain.jpg";
import TodoMain2 from "../../../Img/a.jpg";
import TodoMain3 from "../../../Img/Search.png";
import TodoMain4 from "../../../Img/money transfer.jpg";

export default () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <br /> */}
      <h1 dir="rtl" style={{ textAlign: "center" }}>
        לאן מתקדמים מכאן ?
      </h1>
      <br />
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
                src={TodoMain1}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  צור אירוע חדש
                </h5>
                <p dir="rtl" className="card-text">
                  פתח לוח שנה וקבע מהו התאריך שבו יתרחש האירוע ..
                </p>
                <a
                  onClick={() => {
                    navigate("CreateEvent");
                  }}
                  className="btn btn-primary"
                >
                  click
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={TodoMain2}
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  הצג אירועים פעילים
                </h5>
                <p dir="rtl" className="card-text"></p>
                <p dir="rtl" className="card-text">
                  קבל אירועים קרובים,  תתעדכן דרך הצאט
                </p>
                <a
                  onClick={() => {
                    navigate("ShowAllEvents");
                  }}
                  className="btn btn-primary"
                >
                  click
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={TodoMain3}
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
              
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  הצג אירועים ישנים
                </h5>
                <p className="card-text" dir="rtl">
                  תוכן אירועים שעברו והסטטוס שלהם כבר לא פעיל
                </p>
                <a onClick={() => {
                  navigate("ViewPastEvents");
                }}
                  className="btn btn-primary">
                  click
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
                src={TodoMain4}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                    העברת כסף למנהל
                </h5>
                <p className="card-text" dir="rtl">
               העברת כספים בצורה פשוטה ומאובטחת למנהל
                </p>
                <a onClick={() => {
                   navigate("pay");
                }} className="btn btn-primary">
                  click
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};
