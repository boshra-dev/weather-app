import { useContext, useEffect } from "react";
import { WeatherContext } from "../hooks/WeatherContext";

function AppInitializer() {
  const { setSearchTrigger } = useContext(WeatherContext);
  useEffect(() => {
    const stored = JSON.parse(window.localStorage.getItem("latAndLon") || "{}");
    if (stored.lat && stored.lon) {
      setSearchTrigger({
        type: "RESTORE",
        payload: { lat: stored.lat, lon: stored.lon },
      });
    }
  }, []);
  return;
}

export default AppInitializer;
