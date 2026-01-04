import { memo } from "react";
import DayCards from "../../../shared/components/day-cards/DayCards";
import DrawChart from "../../../shared/components/draw-chart/DrawChart";
import TodayMainInfo from "./TodayMainInfo";
import TodaySecondaryInfo from "./TodaySecondaryInfo";

const TodayDetailsView = memo(function TodayDetailsViewComponent({
  isLoading,
  showContent,
  dayDate,
  weatherForecast,
  chartData,
  currentDay,
}) {
  return (
    <div style={{ outline: "10px solid red" }}>
      <div className="today-details-container">
        <div className="today-info">
          <TodayMainInfo
            isLoading={isLoading}
            showContent={showContent}
            dayDate={dayDate}
            weatherForecast={weatherForecast}
          />
          <hr />

          <TodaySecondaryInfo
            isLoading={isLoading}
            showContent={showContent}
            weatherForecast={weatherForecast}
          />
        </div>

        <div className="today-charts-cards" style={{ marginTop: "10px" }}>
          <DrawChart
            chartData={chartData}
            isLoading={isLoading}
            showContent={showContent}
            hide={false}
          />

          <DayCards
            isLoading={isLoading}
            showContent={showContent}
            currentDay={currentDay}
          />
        </div>
      </div>
    </div>
  );
});
export default TodayDetailsView;
