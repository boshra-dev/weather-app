import { useEffect } from "react";

export default function useDaysListLocalStorage({ daysList, setDaysList }) {
  useEffect(() => {
    if (Array.isArray(daysList) && daysList.length > 0) {
      window.localStorage.setItem("daysList", JSON.stringify(daysList));
    }
  }, [daysList]);
  useEffect(() => {
    const stored = JSON.parse(window.localStorage.getItem("daysList") || "[]");
    if (stored.length > 0) {
      setDaysList(stored);
    }
  }, []);
}
