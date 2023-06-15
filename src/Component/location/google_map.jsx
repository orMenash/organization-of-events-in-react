import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  // position: "static",
  width: '90%',
  height: '80%',
  top: "1%",
  right: "2.5%"
};

const MapComponent = ({ google, latitude, longitude }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
  
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: latitude, lng: longitude }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </Map>

  );
};



export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
})(MapComponent);

