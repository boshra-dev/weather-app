import RenderedHoursByDay from "../../../features/today-details/components/RenderedHoursByDay";
import WeatherForecast from "../../../features/Weather/components/WeatherForecast";
import CurrentDayCard from "./CurrentDayCard";
import SkeletonBlock from "../skeleton/SkeletonBlock";
import { memo } from "react";
const DayCards = memo(function DayCardsComponents({
  error = "",
  isLoading,
  showContent,
  daysShow,
  currentDay,
  showCurrentDay = false,
  currentDayDetails,
}) {
  const showSkeleton = !showContent && showCurrentDay;
  const showCurrentCard = showContent && showCurrentDay;
  const hasData =
    showCurrentCard &&
    currentDayDetails?.data?.main &&
    currentDayDetails?.data?.weather;
  if (error?.msg) return null;

  return (
    <div className="day-cards-container">
      <div style={{ display: showSkeleton ? "block" : "none" }}>
        <SkeletonBlock
          showContent={showContent}
          isLoading={isLoading}
          className={"day-card"}
        />
      </div>
      <div style={{ display: hasData ? "block" : "none" }}>
        <CurrentDayCard currentDayDetails={currentDayDetails} />
      </div>{" "}
      {showCurrentDay ? (
        <WeatherForecast
          showContent={showContent}
          daysShow={daysShow}
          isLoading={isLoading}
        />
      ) : (
        <RenderedHoursByDay
          isLoading={isLoading}
          showContent={showContent}
          currentDay={currentDay}
        />
      )}
    </div>
  );
});
export default DayCards;
