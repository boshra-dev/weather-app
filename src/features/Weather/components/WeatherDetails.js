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
  const safeTemp = (temp) =>
    Number.isFinite(temp) ? getTempInCelsius(temp) : null;
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
              showContent={showContent && Number.isFinite(weatherDetails?.temp)}
            >
              {Number.isFinite(weatherDetails?.temp)
                ? `${safeTemp(weatherDetails?.temp)}°C`
                : null}
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
              showContent={
                showContent && Number.isFinite(weatherDetails?.feels_like)
              }
            >
              {Number.isFinite(weatherDetails?.feels_like)
                ? `Feels-like ${safeTemp(weatherDetails?.feels_like)}°`
                : null}
            </SkeletonBlock>
          </div>
          <div className="max-min-temp">
            <SkeletonBlock
              className={"skeleton-text"}
              isLoading={isLoading}
              showContent={
                showContent &&
                Number.isFinite(weatherDetails?.temp_max) &&
                Number.isFinite(weatherDetails?.temp_min)
              }
            >
              Max {safeTemp(weatherDetails?.temp_max)}° | Min{" "}
              {safeTemp(weatherDetails?.temp_min)}°
            </SkeletonBlock>
          </div>
        </div>
      )}
    </div>
  );
});
export default WeatherDetails;
