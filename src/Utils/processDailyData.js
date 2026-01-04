import getTempInCelsius from "./getTempInCelsius";

export default function processDailyData(
  dayData,
  isReadyData = false,
  forChart,
  forGroupByDay
) {
  const currentDay = new Date();
  const currentDayNum = currentDay.getDate();
  const tempArr = [];

  if (forChart && isReadyData) {
    dayData?.forEach((item) => {
      const time = new Date(item.dt * 1000).toLocaleTimeString("en", {
        hour: "2-digit",
        minute: "2-digit",
      });

      tempArr.push({
        name: time,
        uv: {
          temp: getTempInCelsius(item.main.temp),
          imgsrc: item.weather[0].icon,
        },
      });
    });
    return tempArr;
  }

  if (forGroupByDay) {
    const daysMap = {};

    dayData?.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const dayName = date.toLocaleString("en-US", { weekday: "short" });

      if (!daysMap[dayName]) {
        daysMap[dayName] = [];
      }
      daysMap[dayName].push(item);
    });

    return Object.entries(daysMap).map(([day, items]) => ({
      day: day,
      weatherDetails: items,
    }));
  }

  if (forChart && !isReadyData) {
    dayData?.forEach((item) => {
      const day = new Date(item.dt_txt);
      const dayNum = day.getDate();

      if (dayNum === currentDayNum) {
        const time = day.toLocaleTimeString("en", {
          hour: "2-digit",
          minute: "2-digit",
        });

        tempArr.push({
          name: time,
          uv: {
            temp: getTempInCelsius(item.main.temp),
            imgsrc: item.weather[0].icon,
          },
        });
      }
    });

    return tempArr;
  }
  return tempArr;
}
