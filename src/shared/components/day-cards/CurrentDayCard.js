import { memo, useEffect, useState } from "react";
import getTempInCelsius from "../../../Utils/getTempInCelsius";

const CurrentDayCard = memo(function CurrentDayCard({ currentDayDetails }) {
  const [imgObj, setImgObj] = useState(null);
  const weatherDetails = currentDayDetails?.data?.main;
  const icon = currentDayDetails?.data?.weather[0]?.icon;
  const weatherDesc = currentDayDetails?.data?.weather[0];

  useEffect(() => {
    if (!icon) return;

    const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const image = new Image();

    image.onload = () => {
      setImgObj(image); // نخزن الصورة نفسها وليس URL
    };

    image.src = url;
  }, [icon]);
  return (
    <div className="day-card">
      <div className="day">Day</div>
      <img alt="" src={imgObj?.src}></img>
      <div className="min-max">
        <div>{getTempInCelsius(weatherDetails?.temp_max)}°</div>
        <div> {getTempInCelsius(weatherDetails?.temp_min)}°</div>
      </div>
    </div>
  );
});
export default CurrentDayCard;
