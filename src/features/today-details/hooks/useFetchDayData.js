import { useEffect, useState } from "react";

export default function useFetchDayData({ daysList, day }) {
  const [dayDate, setDayDate] = useState({
    dayName: "",
    dayNum: "",
    monthName: "",
  });
  const [weatherForecast, setWeatherDesc] = useState({
    icon: "",
    desc: "",
    min: "",
    max: "",
    rainSum: "",
    windAvg: "",
    humidityAvg: "",
  });
  const [currentDay, setCurrentDay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const dayHours = daysList.filter((d) => {
      const dName = new Date(d.dt * 1000).toLocaleString("en-US", {
        weekday: "short",
      });
      return dName === day;
    });
    if (!dayHours.length) {
      setCurrentDay([]);
      setDayDate({});
      setWeatherDesc({});
      setIsLoading(false);
      return;
    }

    setCurrentDay(dayHours);
    const firstDay = new Date(dayHours[0]?.dt * 1000);
    setDayDate({
      dayNum: firstDay.getDate(),
      monthName: firstDay.toLocaleString("en-US", { month: "long" }),
      dayName: firstDay.toLocaleString("en-US", { weekday: "long" }),
    });
    const temp = dayHours.map((d) => d.main.temp);
    setWeatherDesc({
      icon: dayHours[0]?.weather[0].icon || "01d",
      desc:
        dayHours[1]?.weather[0].description ||
        dayHours[0]?.weather[0].description ||
        "",
      min: Math.min(...temp),
      max: Math.max(...temp),
      rainSum: dayHours
        .reduce((acc, d) => acc + (d.rain?.["3h"] || 0), 0)
        .toFixed(1),
      windAvg:
        dayHours.reduce((acc, d) => acc + (d.wind.speed || 0), 0) /
        dayHours.length,
      humidityAvg:
        dayHours.reduce((acc, d) => acc + (d.main.humidity || 0), 0) /
        dayHours.length,
    });

    //intentional delay for better skeleton UX

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [daysList, day]);

  return { dayDate, weatherForecast, currentDay, isLoading };
}
