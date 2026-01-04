import { createContext, useState } from "react";

export const DaysListContext = createContext();
export default function DaysProvider({ children }) {
  const [daysList, setDaysList] = useState([]);
  return (
    <DaysListContext.Provider value={{ daysList, setDaysList }}>
      {children}
    </DaysListContext.Provider>
  );
}
