import { React, useState, useRef } from "react";
import { ReactJewishDatePicker, BasicJewishDay } from "react-jewish-datepicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";

function CreateEvent(props) {
  const [basicJewishDay, setBasicJewishDay] = useState();
  const [basicDay, setBasicDay] = useState();
  const [checked, setChecked] = useState(false);
  const [NameEvent, setNameEvent] = useState("");
  const refClick = useRef("לוח לועזי");
  const navigate = useNavigate();

  const handleChange = () => {
    setChecked(!checked);
  };
  const newEvent = async () => {
    const dilema = checked ? basicJewishDay : basicDay;
    const photoUser = await fetch("http://picsum.photos/200");
    axios
      .post("http://localhost:3010/event/CreateEvent", {
        NameEvent: NameEvent,
        Date: dilema,
        photoUser: photoUser.url,
      })
      .then((result) => {
        props.setEventClick(result.data.data);

        {
          <h1>" הצלחה !", "האירוע נשמר ! "</h1>;
        }
        navigate("../ChatObEvent");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (

    <div className="container text-center">
      <div className="card">
        <div className="card-body">
          <h1 dir="rtl">בחר תאריך</h1>
          <br />

          <p dir="rtl">
            <TextField
              sx={{ width: "135px" }}
              value={NameEvent}
              required
              className="card-body"
              label="שם אירוע .."
              onChange={(e) => {
                setNameEvent(e.target.value);
              }}
            />
          </p>

          <form>
            <input type="radio" name="date" onClick={handleChange} />
            <label /> {refClick.current.value}
            <br></br>
            <label /> שנה לוח !
          </form>

          <br />

          <>
            {checked ? (
              <ReactJewishDatePicker
                style={{ width: "100%" }}
                value={new Date()}
                isHebrew
                isIsrael={true}
                onClick={(day) => {
                  setBasicJewishDay(day.date);
                }}
              />
            ) : (
              <input
                min={new Date().toISOString().slice(0, -8)}
                type={"datetime-local"}

                defaultValue={new Date().toISOString().slice(0, -8)}
                onChange={(e) => {
                  setBasicDay(e.target.value);
                }}
              />

            )}
          </>
          <br />
          <br />
          <p dir="rtl">
            <TextField
              sx={{ width: "135px" }}
              value={NameEvent}
              required
              className="adderdd_event"
              label="מיקום האירוע"
              onChange={(e) => {
                setNameEvent(e.target.value);
              }}
            />
          </p>



          <button onClick={newEvent}>הוסף אירוע חדש !</button>
        </div>
      </div>
    </div>

  );
}
export default CreateEvent;
