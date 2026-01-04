import { weatherIcon } from "../../../Utils/WeatherIcon";
import getTempInCelsius from "../../../Utils/getTempInCelsius";
import SkeletonBlock from "../../../shared/components/skeleton/SkeletonBlock";

export default function TodayMainInfo({
  isLoading,
  showContent,
  dayDate,
  weatherForecast,
}) {
  return (
    <div className="main-info">
      <div className="text-main-info">
        <div className="day-date">
          <SkeletonBlock
            className={"skeleton-day"}
            isLoading={isLoading}
            showContent={showContent}
          >
            {`${dayDate.dayName}, ${dayDate.dayNum} ${dayDate.monthName}`}
          </SkeletonBlock>
        </div>
        <div className="max-min-temp">
          <SkeletonBlock
            className={"skeleton-day"}
            isLoading={isLoading}
            showContent={showContent}
          >
            {getTempInCelsius(weatherForecast.min)}° /{" "}
            {getTempInCelsius(weatherForecast.max)}°
          </SkeletonBlock>
        </div>
        <div className="desc">
          <SkeletonBlock
            className={"skeleton-day"}
            isLoading={isLoading}
            showContent={showContent}
          >
            {weatherForecast.desc}
          </SkeletonBlock>
        </div>
      </div>

      <div
        className={`img-container ${
          !showContent ? "skeleton-detailes-img" : ""
        } `}
      >
        <SkeletonBlock
          circle={true}
          isLoading={isLoading}
          showContent={showContent}
        >
          {<img alt="" src={weatherIcon[weatherForecast.icon]}></img>}
        </SkeletonBlock>
      </div>
    </div>
  );
}
