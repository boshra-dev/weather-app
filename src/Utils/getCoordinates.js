import axios from "axios";

export default async function getCoordinates(cityName, apiKey) {
  if (!cityName.trim()) return;
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
    );

    if (!res.data.length) {
      const err = new Error("");
      err.message = "CITY_NOT_FOUND";
      throw err;
    }
    return {
      lat: res.data[0].lat,
      lon: res.data[0].lon,
    };
  } catch (error) {
    let err;
    if (error.code === "ERR_NETWORK") {
      err = { message: "NO_NETWORK" };
    } else if (
      error?.response?.status === 404 ||
      error.message === "CITY_NOT_FOUND"
    ) {
      err = { message: "CITY_NOT_FOUND" };
    } else {
      err = { message: "UNKNOWN_ERROR" };
    }
    throw err;
  }
}
