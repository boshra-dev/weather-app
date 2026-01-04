import axios from "axios";

export const fetchWeatherByCoords = async (lat, lon, apiKey) => {
  const dayRes = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );

  const tempRes = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  return { dayRes, tempRes };
};
