import { useNavigate } from "react-router-dom";
import TodoMain1 from "../../../../Img/TodoMain.jpg";
import TodoMain2 from "../../../../Img/a.jpg";
import TodoMain3 from "../../../../Img/list.jpg";
import TodoMain4 from "../../../../Img/change.jpg";
import TodoMain5 from "../../../../Img/delete.jpg";

export default () => {
  const navigate = useNavigate();

  return (
    <>
      <br />
      <h1 dir="rtl" style={{ textAlign: "center" }}>
        תפריט מנהל
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
                  הצגת האירועים הפעילים
                </h5>
                <p dir="rtl" className="card-text"></p>
                <p dir="rtl" className="card-text">
                  אירועים קרובים, עבור על היסטורית מפגשים וקבל מידע עדכני ..
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
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
                src={TodoMain3}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  שלח הודעה למשתתפים
                </h5>
                <p className="card-text" dir="rtl">
                  כל אנשי הצאט אצלך ברשימה
                </p>
                <a onClick={() => {
                  navigate("ShowAllUsers");
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
                  שינוי סטטוס אירוע !
                </h5>
                <p className="card-text" dir="rtl">
                  שינוי סטטוס האירוע הפוך אותו ללא פעיל
                </p>
                <a onClick={() => {
                  navigate("changeEvent");
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
                src={TodoMain5}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  מחיקת משתמש מהמערכת
                </h5>
                <p className="card-text" dir="rtl">
                  מחיקת משתמש מהמערכת והוצאתו מבסיס הנתונים לחלוטין
                </p>
                <a onClick={() => {
                  navigate("DeletingUser");
                }}
                  className="btn btn-primary">
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
