import { memo } from "react";
import sadCloud from "../../../assets/images/no-results/no-Photoroom.png";
import SkeletonBlock from "../../../shared/components/skeleton/SkeletonBlock";
import { weatherIcon } from "../../../Utils/WeatherIcon";

const WeatherDetails = memo(function WeatherDetails({
  isLoading,
  error,
  showContent,
  getTempInCelsius,
  currentDayDetails,
}) {
  const weatherDesc = currentDayDetails?.data?.weather[0];
  const weatherDetails = currentDayDetails?.data?.main;
  return (
    <div className="content">
      <div
        className={`weather-img ${
          !showContent && !error.msg ? "weather-img-skeleton" : ""
        }`}
      >
        {error.msg !== "" ? (
          <img alt="" src={sadCloud}></img>
        ) : (
          <>
            <SkeletonBlock
              circle={true}
              isLoading={isLoading}
              showContent={showContent}
            >
              <img alt="" src={weatherIcon[weatherDesc?.icon]}></img>
            </SkeletonBlock>
          </>
        )}
      </div>

      {error.msg !== "" ? (
        <div className="error-msg">
          <>
            <div>{error.msg}</div>
            <div>{error.desc}</div>
          </>
        </div>
      ) : (
        <div>
          <div className="temp">
            <SkeletonBlock
              className={"skeleton-text"}
              isLoading={isLoading}
              showContent={showContent}
            >
              {getTempInCelsius(weatherDetails?.temp)}°C
            </SkeletonBlock>
          </div>
          <div className="weather-desc">
            <SkeletonBlock
              className={"skeleton-text"}
              isLoading={isLoading}
              showContent={showContent}
            >
              {weatherDesc?.description}
            </SkeletonBlock>
          </div>
          <div className="feels-like">
            <SkeletonBlock
              className={"skeleton-text"}
              isLoading={isLoading}
              showContent={showContent}
            >
              Feels-like {getTempInCelsius(weatherDetails?.feels_like)}°
            </SkeletonBlock>
          </div>
          <div className="max-min-temp">
            <SkeletonBlock
              className={"skeleton-text"}
              isLoading={isLoading}
              showContent={showContent}
            >
              Max {getTempInCelsius(weatherDetails?.temp_max)}° | Min{" "}
              {getTempInCelsius(weatherDetails?.temp_min)}°
            </SkeletonBlock>
          </div>
        </div>
      )}
    </div>
  );
});
export default WeatherDetails;
