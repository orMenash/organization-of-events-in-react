
export const get_my_location = (fanc) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleLocationSuccess,
        handleLocationError,
        { timeout: 10000 }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      // Handle fallback option if geolocation is not supported
    }
  };

  const handleLocationSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    fanc(latitude, longitude);
  };

  const handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log('User denied the request for Geolocation.');
        // Handle fallback option if permission is denied
        break;
      case error.POSITION_UNAVAILABLE:
        console.log('Location information is unavailable.');
        // Handle fallback option if location information is unavailable
        break;
      case error.TIMEOUT:
        console.log('The request to get user location timed out.');
        // Handle fallback option if the request times out
        break;
      case error.UNKNOWN_ERROR:
        console.log('An unknown error occurred.');
        // Handle fallback option for unknown errors
        break;
      default:
        console.log('Error getting location:', error);
        // Handle any other error cases
        break;
    }
  };

 

