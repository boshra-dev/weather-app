import { useContext, useEffect, useMemo } from "react";
import useToggleContent from "../../../shared/hooks/useToggleContent";
import getTempInCelsius from "../../../Utils/getTempInCelsius";
import WeatherView from "../components/WeatherView";
import processDailyData from "../../../Utils/processDailyData";
import useOnSearch from "../hooks/useOnSearch";
import { WeatherContext } from "../../../shared/hooks/WeatherContext";

export default function WeatherPage() {
  const { searchTrigger } = useContext(WeatherContext);

  const { currentDayDetails, daysList, isLoading, error, searchWeather } =
    useOnSearch();

  const showContent = useToggleContent(isLoading);

  const processed = useMemo(() => {
    return processDailyData(daysList, false, true, false);
  }, [daysList]);

  const daysShow = useMemo(() => {
    const groupedDays = processDailyData(daysList, false, false, true);
    const [currentDayData, ...otherDays] = groupedDays;

    return otherDays;
  }, [daysList]);

  useEffect(() => {
    if (!searchTrigger) return;
    searchWeather(searchTrigger);
  }, [searchTrigger]);

  return (
    <div className="App">
      <div className="weather-app">
        <WeatherView
          isLoading={isLoading}
          showContent={showContent}
          getTempInCelsius={getTempInCelsius}
          chartData={processed}
          daysShow={daysShow}
          currentDayDetails={currentDayDetails}
          error={error}
        />
      </div>
    </div>
  );
}
