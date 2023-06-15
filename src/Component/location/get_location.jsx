import React, { useState } from 'react';
import axios from 'axios';
import MapComponent from "./google_map";


const LocationReceiver = () => {
  const [my_map, set_my_map] = useState(0);

  let coords = {
    latitude: null,
    longitude: null,
  }

  const handleFetchLocation = async () => {
    try {
      const response = await axios.get(`${process.env.BASIC_URL_SERVER}/location/get_location`);
      if (response.status === 200) {
        coords.latitude = response.data.latitude;
        coords.longitude = response.data.longitude;
        console.log(`latitude = ${coords.latitude},  longitude = ${ coords.longitude}`);
        showMap();

      } else {
        console.log('Failed to fetch location data.');
      }
    } catch (error) {
      if (error.response) {
        console.log('Error:', error.response.data);
      } else if (error.request) {
        console.log('No response received from the server.');
      } else {
        console.log('Error occurred:', error.message);
      }
    }
  };

  const showMap = () => {
    set_my_map(<MapComponent latitude={coords.latitude} longitude={coords.longitude} />);
  }

  return (
    <div>
      <button onClick={handleFetchLocation}>Fetch Location</button>
      {my_map}
    </div>
  );
};

export default LocationReceiver;
