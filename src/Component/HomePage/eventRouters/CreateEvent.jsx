import { React, useState, useRef, useEffect } from "react";
import { ReactJewishDatePicker, BasicJewishDay } from "react-jewish-datepicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";


import {

  Autocomplete, useJsApiLoader,

} from '@react-google-maps/api'




function CreateEvent(props) {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAP_KEY,
    libraries: ['places'],
  })




  if (!isLoaded) {
    console.log("!isloaded", isLoaded);

  }
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


  const aa = () => {

    let urlAdderss = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=AIzaSyDYoJWjL8pJ8HUo94eY5ZmZlqpQSgaG4oU`

    var config = {
      method: 'get',
      url: urlAdderss,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  const handleChange = () => {
    setChecked(!checked);
  };
  const newEvent = async () => {
    const dilema = checked ? basicJewishDay : basicDay;
    const photoUser = await fetch("http://picsum.photos/200");



    axios
      .post(`${process.env.BASIC_URL_SERVER}/event/CreateEvent`, {
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
export default CreateEvent;
