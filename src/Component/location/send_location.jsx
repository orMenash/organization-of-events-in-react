import React from 'react';
import axios from 'axios';
import get_my_location from '../../utils/get_my_location'




const LocationSender = () => {
  
  const sendLocationToServer = async (latitude, longitude) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASIC_URL_SERVER}/location/send_location`, { latitude, longitude });
      if (response.status === 200) {
        console.log('Location sent successfully.');
      } else {
        console.log('Failed to send location.');
      }
    } catch (error) {
      console.log('Error sending location:', error);
    }
  };

  return (
    <div>
      <button onClick={() => {
        get_my_location(sendLocationToServer)
      }}>Send Location</button>
    </div>
  );
};

export default LocationSender;
