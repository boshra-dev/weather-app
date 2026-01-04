import { useCallback, useContext, useRef, useState } from "react";
import { DaysListContext } from "../../../shared/hooks/DaysListContext";
import { fetchWeatherByCoords } from "../../../services/weatherServices";
import getCoordinates from "../../../Utils/getCoordinates";

export default function useOnSearch() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [error, setError] = useState({ msg: "", desc: "" });
  const [currentDayDetails, setCurrentDayDetails] = useState([]);
  const { daysList, setDaysList } = useContext(DaysListContext);
  const [isLoading, setIsLoading] = useState(false);
  let isCalling = useRef(false);
  const searchWeather = useCallback(
    async (searchTrigger) => {
      if (isCalling.current) return;
      isCalling.current = true;
      setIsLoading(true);
      setDaysList([]);
      setError({ msg: "", desc: "" });
      setCurrentDayDetails([]);
      try {
        let latCoords, lonCoords;

        if (searchTrigger.type === "GPS" || searchTrigger.type === "RESTORE") {
          latCoords = searchTrigger.payload.lat;
          lonCoords = searchTrigger.payload.lon;
        } else if (searchTrigger.type === "MANUAL") {
          const res = await getCoordinates(searchTrigger.payload.city, apiKey);
          latCoords = res.lat;
          lonCoords = res.lon;
          if (latCoords && lonCoords) {
            window.localStorage.setItem(
              "latAndLon",
              JSON.stringify({ lat: latCoords, lon: lonCoords })
            );
          }
        }

        if (latCoords && lonCoords) {
          const { dayRes, tempRes } = await fetchWeatherByCoords(
            latCoords,
            lonCoords,
            apiKey
          );

          setCurrentDayDetails(dayRes);
          setDaysList(tempRes.data.list);
        }
      } catch (error) {
        let err = { msg: "", desc: "" };
        if (error.message === "NO_NETWORK") {
          err = {
            msg: "No internet connection",
            desc: "Please check your network and try again",
          };
        } else if (error.message === "CITY_NOT_FOUND") {
          err = {
            msg: "The city could not be found.",
            desc: "Please verify the name and try again",
          };
        } else {
          err = { msg: "Unexpected error.", desc: "Please try again" };
        }
        setError(err);
      } finally {
        setIsLoading(false);
        isCalling.current = false;
      }
    },
    [setDaysList, apiKey]
  );
  return { daysList, error, isLoading, currentDayDetails, searchWeather };
}
