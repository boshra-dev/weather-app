import { Link } from "react-router-dom";
import getTempInCelsius from "../../../Utils/getTempInCelsius";
import getMinAndMax from "../../../Utils/getMinAndMax";
import SkeletonBlock from "../../../shared/components/skeleton/SkeletonBlock";
import { memo, useEffect } from "react";

const WeatherForecast = memo(function WeatherForecast({
  showContent,
  daysShow,
  isLoading,
}) {
  useEffect(() => {
    if (!daysShow.length) return;

    const icons = daysShow.map(
      (day) => day.weatherDetails[1]?.weather[0]?.icon
    );

    icons.forEach((icon) => {
      const img = new Image();
      img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      // browser start to download img befor the img show in jsx, when cards enters dom the img was ready in cach
    });
  }, [daysShow]);
  const nextDays = (
    <SkeletonBlock
      count={5}
      className={"day-card"}
      isLoading={isLoading}
      showContent={showContent}
    >
      {daysShow?.map((day, ind) => (
        <Link key={day.weatherDetails[0].dt} to={`${day.day}`}>
          <div className="day-card" key={day.weatherDetails[0].dt}>
            <div className="day">{day?.day}</div>

            <img
              key={
                day.weatherDetails[0].dt +
                "-" +
                day?.weatherDetails[1]?.weather[0]?.icon
              }
              alt=""
              src={`https://openweathermap.org/img/wn/${day?.weatherDetails[1]?.weather[0]?.icon}@2x.png`}
            />
            <div className="min-max">
              <div>
                {getTempInCelsius(getMinAndMax(day?.weatherDetails, "minimum"))}
                °{" "}
              </div>
              <div>
                {" "}
                {getTempInCelsius(getMinAndMax(day?.weatherDetails, "maximum"))}
                °
              </div>
            </div>
          </div>
        </Link>
      ))}
    </SkeletonBlock>
  );

  return nextDays;
});
export default WeatherForecast;
