export default function getTempInCelsius(temp) {
  const cieliususTemp = (temp - 273.15).toFixed(1);
  return +cieliususTemp;
}
