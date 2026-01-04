import { useEffect, useState } from "react";
import { showSuggestion } from "../../../services/showSuggestion";

export default function useShowSuggestion({
  city,
  userSelected,
  setSuggestionShow,
}) {
  const [citySuggestion, setCitySuggestion] = useState([]);

  useEffect(() => {
    let active = true;
    async function loadSuggestion() {
      try {
        const res = await showSuggestion(city);
        if (!active) return;
        setCitySuggestion(res);
        if (!userSelected) {
          setSuggestionShow(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
    const timeOut = setTimeout(() => {
      if (city?.trim().length >= 2) {
        loadSuggestion();
      }
    }, 400);
    return () => {
      active = false;
      clearTimeout(timeOut);
    };
  }, [city, userSelected]);

  return { citySuggestion };
}
