export default function getMinAndMax(tempArr, type) {
  const tempsInDay = [];
  if (type === "minimum") {
    tempArr.forEach((temp) => {
      tempsInDay.push(temp.main.temp_min);
    });
    return Math.min(...tempsInDay);
  } else {
    tempArr.forEach((temp) => {
      tempsInDay.push(temp.main.temp_max);
    });
    return Math.max(...tempsInDay);
  }
}
