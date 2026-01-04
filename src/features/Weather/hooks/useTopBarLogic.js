import { useContext, useEffect, useRef, useState } from "react";
import useShowSuggestion from "./useShowSuggestion";
import { WeatherContext } from "../../../shared/hooks/WeatherContext";

export default function useTopBarLogic() {
  const inputRef = useRef(null);
  const [placeholder, setPlaceHolder] = useState("Search for city");
  const [userSelected, setUserSelected] = useState(false);
  const [suggestionShow, setSuggestionShow] = useState(false);
  const [city, setCity] = useState("");
  const { setSearchTrigger } = useContext(WeatherContext);

  const onInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    setUserSelected(false);
    setSuggestionShow(value.trim() === "" ? false : true);
  };

  function handleSuggestionClick(sug) {
    setUserSelected(true);
    setCity(sug.formatted);
    setSuggestionShow(false);

    setSearchTrigger({ type: "MANUAL", payload: { city: sug.formatted } });
  }
  const { citySuggestion } = useShowSuggestion({
    city,
    userSelected,
    setSuggestionShow,
  });
  const suggestion = citySuggestion?.filter((sug) =>
    sug.formatted.toLowerCase().includes(city.toLowerCase())
  );
  function handleButtonClick() {
    setSuggestionShow(false);
    if (!city.trim()) {
      setPlaceHolder("Write city name");

      setTimeout(() => {
        setPlaceHolder("Search for city");
      }, 1500);
    } else {
      setSearchTrigger({ type: "MANUAL", payload: { city: city } });
    }
  }
  useEffect(() => {
    if (placeholder === "Write city name" && inputRef.current) {
      const el = inputRef.current;
      el.classList.remove("shake");
      void el.offsetWidth;
      el.classList.add("shake");
    }
  }, [placeholder]);

  return {
    placeholder,
    inputRef,
    city,
    onInputChange,
    handleButtonClick,
    suggestionShow,
    suggestion,
    handleSuggestionClick,
  };
}
