import { React, useState, useRef, useEffect } from "react";
import { ReactJewishDatePicker, BasicJewishDay } from "react-jewish-datepicker";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import TextField from "@mui/material/TextField";
import "./CreateEvent.css"


import {

  Autocomplete, useJsApiLoader,

} from '@react-google-maps/api'




function CreateEvent(props) {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
    libraries: ['places'],
  })


  const [map, setMap] = useState(/** @type google.maps.Map */(null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const originRef = useRef()


  const [basicJewishDay, setBasicJewishDay] = useState();
  const [basicDay, setBasicDay] = useState();
  const [checked, setChecked] = useState(false);
  const [NameEvent, setNameEvent] = useState("");
  const refClick = useRef("לוח לועזי");
  const navigate = useNavigate();

  let query_places = "geevat zeev";

  const aa = async() => {

    let urlAdderss = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query_places}&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`;

    let x = await fetch(urlAdderss);
    console.log(x);
    // axios
    // .get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=geevat%20zeev&key=AIzaSyDYoJWjL8pJ8HUo94eY5ZmZlqpQSgaG4oU")
    // .then((response) => {
    //   console.log(JSON.stringify(response.data), 111111);
    // })
    // .catch((err) => {
    //   console.log(err, 22222);
    // });
  
  }


  const handleChange = () => {
    setChecked(!checked);
  };
  const newEvent = async () => {
    const dilema = checked ? basicJewishDay : basicDay;
    const photoUser = await fetch("http://picsum.photos/200");

    axios
      .post(`${process.env.REACT_APP_BASIC_URL_SERVER}/event/CreateEvent`, {
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

  if (!isLoaded) {
    console.log("!isloaded", isLoaded);
    return <div>Loading...</div>;
  }
  else {
    return (

      <div  className="container text-center">
        <div id="create_event_container" className="card">
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
              <Autocomplete>
                <input type='text' placeholder='מיקום האירוע' ref={originRef} />
              </Autocomplete>

            </p>
            <button onClick={() => { aa() }}>הוסף אירוע חדש !</button>
          </div>
        </div>

      </div>

    );
  }
}
export default CreateEvent;
