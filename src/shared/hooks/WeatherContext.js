import { createContext, useState } from "react";

export const WeatherContext = createContext();
export default function WeatherContextProvider({ children }) {
  const [searchTrigger, setSearchTrigger] = useState({
    type: "GPS" | "MANUAL" | "RESTORE",
    payload: { lat: "", lon: "", city: "" },
  });

  return (
    <WeatherContext.Provider value={{ searchTrigger, setSearchTrigger }}>
      {children}
    </WeatherContext.Provider>
  );
}
