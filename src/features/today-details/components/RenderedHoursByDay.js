import { memo } from "react";
import SkeletonBlock from "../../../shared/components/skeleton/SkeletonBlock";

const RenderedHoursByDay = memo(function RenderedHoursByDay({
  showContent,
  isLoading,
  currentDay,
}) {
  const renderedHours = (
    <SkeletonBlock
      count={currentDay.length}
      isLoading={isLoading}
      className={"day-card"}
      showContent={showContent}
    >
      {currentDay?.map((day, ind) => (
        <div key={ind} className="day-card">
          <div className="day">
            {new Date(day.dt * 1000).toLocaleTimeString("en", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>

          <div>{day.weather[0].description}</div>
          <div className="more-info">
            <div>💧 {day.main.humidity}%</div>
            <div>💨 {Math.round(day.wind.speed)} km/h</div>
            <div>🌧️ {day.rain?.["3h"].toFixed(1) || 0}mm</div>
          </div>
        </div>
      ))}
    </SkeletonBlock>
  );
  return renderedHours;
});
export default RenderedHoursByDay;
