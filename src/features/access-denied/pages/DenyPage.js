import { useContext, useState } from "react";
import DenyPageShow from "../components/DenyPageShow";
import { WeatherContext } from "../../../shared/hooks/WeatherContext";

export default function DenyPage() {
  const [cityName, setCityName] = useState("");
  const [modalShow, setModalShow] = useState(false);


  const storeCityName = (name) => {
    setCityName(name);
  };

  const modalToggle = (mode) => {
      if(mode){
         setCityName("");
      }

        setModalShow(mode);
  };

  const {setSearchTrigger} = useContext(WeatherContext)

  return (
    <DenyPageShow
      cityName={cityName}
      storeCityName={storeCityName}
      modalShow={modalShow}
      modalToggle={modalToggle}
      setSearchTrigger={setSearchTrigger}
   
    />
  );
}
