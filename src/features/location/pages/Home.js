import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useGeolocation from "../hooks/useGeolocation";
import LocationStatusView from "../components/LocationStatusView";
import { WeatherContext } from "../../../shared/hooks/WeatherContext";

export default function Home() {
  const navigate = useNavigate();
  const { setSearchTrigger } = useContext(WeatherContext);
  const { getPosition, resetError, loading, error } = useGeolocation({
    onSuccess: (coords) => {
      window.localStorage.setItem("latAndLon", JSON.stringify(coords));
      setSearchTrigger({
        type: "GPS",
        payload: { lat: coords.lat, lon: coords.lon },
      });

      navigate("/weatherPage");
    },
  });

  return (
    <LocationStatusView
      errorCode={error}
      getPosition={getPosition}
      resetError={resetError}
      loading={loading}
    />
  );
}
