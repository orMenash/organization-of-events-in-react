import React from 'react'
import MapComponent from "./google_map";

function Show_map_coords(props) {
    
    const coords = props.eventClick.loc;

    console.log(coords);

  return (
    <div>
        <MapComponent latitude={coords.lat} longitude={coords.lng} />
    </div>
  )
}

export default Show_map_coords