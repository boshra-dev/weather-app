import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { DaysListContext } from "../../../shared/hooks/DaysListContext";
import PageNotFound from "../../../pages/not-found/PageNotFound";
import useToggleContent from "../../../shared/hooks/useToggleContent";
import useFetchDayData from "../hooks/useFetchDayData";
import useDaysListLocalStorage from "../hooks/useDaysListLocalStorage";
import processDailyData from "../../../Utils/processDailyData";
import TodayDetailsView from "../components/TodayDetailsView";

export default function TodayDetails() {
  const { daysList, setDaysList } = useContext(DaysListContext);
  const valideDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const { day } = useParams();
  const { dayDate, weatherForecast, currentDay, isLoading } = useFetchDayData({
    daysList,
    day,
  });

  const showContent = useToggleContent(isLoading);
  useDaysListLocalStorage({ daysList, setDaysList });

  const processed = useMemo(() => {
    return processDailyData(currentDay, true, true, false);
  }, [currentDay]);

  if (!valideDays.includes(day)) {
    return <PageNotFound />;
  }
  return (
    <TodayDetailsView
      isLoading={isLoading}
      showContent={showContent}
      dayDate={dayDate}
      weatherForecast={weatherForecast}
      chartData={processed}
      currentDay={currentDay}
    />
  );
}
