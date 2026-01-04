import { useState } from "react";

export default function useGeolocation({ onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ code: "", msg: "", desc: "" });

  const getPosition = () => {
    if (!navigator.geolocation) {
      const err = {
        code: "NOT_SUPPORTED",
        msg: "Location not supported",
        desc: "Your browser doesn't support location services. Please try using a different browser.",
      };
      setError(err);
      return;
    }

    setLoading(true);
    setError({ code: "", msg: "", desc: "" });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        onSuccess?.({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLoading(false);
      },
      (geoError) => {
        setLoading(false);
        let err;
        switch (geoError.code) {
          case 1:
            err = {
              code: "ACCESS_DENIED",
              msg: "Location Access Denied",
              desc: "To show accurate weather for your area, we need access to your location. You can enable it from browser settings or try again.",
            };
            break;
          case 2:
            err = {
              code: "NETWORK_ERROR",
              msg: "No Internet connection",
              desc: "Please check your network connection and try again.",
            };
            break;
          case 3:
            err = {
              code: "TIME_OUT",
              msg: "Request Timed Out",
              desc: "Getting your location took too long. Please ensure you have a clear signal and try again.",
            };
            break;
          default:
            err = {
              code: "UNKNOWN_ERROR",
              msg: "Unexpected Error",
              desc: "Something went wrong while getting your location. Please refresh the page or try again later.",
            };
        }
        setError(err);
      },
      { timeout: 30000, enableHighAccuracy: true, maximumAge: 60000 }
    );
  };

  const resetError = () => setError({ code: "", msg: "", desc: "" });

  return { getPosition, resetError, loading, error };
}
