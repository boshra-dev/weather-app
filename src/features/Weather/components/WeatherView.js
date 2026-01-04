import { memo } from "react";
import DayCards from "../../../shared/components/day-cards/DayCards";
import DrawChart from "../../../shared/components/draw-chart/DrawChart";
import WeatherDetails from "./WeatherDetails";
import TopBarContainer from "./TopBarContainer";

const WeatherView = memo(function WeatherViewComponents({
  onSearch,
  isLoading,
  error,
  showContent,
  getTempInCelsius,

  chartData,
  daysShow,
  currentDayDetails,
}) {
  return (
    <div className="App">
      <div className="weather-app">
        <TopBarContainer onSearch={onSearch} />

        <WeatherDetails
          isLoading={isLoading}
          error={error}
          showContent={showContent}
          getTempInCelsius={getTempInCelsius}
          currentDayDetails={currentDayDetails}
        />

        <DayCards
          daysShow={daysShow}
          error={error}
          isLoading={isLoading}
          showContent={showContent}
          getTempInCelsius={getTempInCelsius}
          showCurrentDay={true}
          currentDayDetails={currentDayDetails}
        />

        <DrawChart
          error={error}
          isLoading={isLoading}
          showContent={showContent}
          hide={true}
          chartData={chartData}
        />
      </div>
    </div>
  );
});
export default WeatherView;
