import Lottie from "lottie-react";
import rainAni from "../../../assets/lotties/Rainy.json";
import windAni from "../../../assets/lotties/Wind farm.json";
import humidityAni from "../../../assets/lotties/raindrop measure.json";
import SkeletonBlock from "../../../shared/components/skeleton/SkeletonBlock";

export default function TodaySecondaryInfo({
  isLoading,
  showContent,
  weatherForecast,
}) {
  const items = [
    {
      label: "rainSum",
      value: ` ${weatherForecast.rainSum}mm`,
      animation: rainAni,
    },
    {
      label: "windAvg",
      value: `${Math.round(weatherForecast.windAvg)}Km/h`,
      animation: windAni,
    },
    {
      label: "humidityAvg",
      value: ` ${Math.round(weatherForecast.humidityAvg)}%`,
      animation: humidityAni,
    },
  ];

  return (
    <div className="secondary-info">
      {items.map((item, ind) => (
        <SkeletonBlock
          key={ind}
          isLoading={isLoading}
          showContent={showContent}
          className="skeleton-info-container"
        >
          <div className="info-container">
            <div>
              {item.label}
              <div className="secondary-info-value">{item.value}</div>
            </div>

            <div className="animation-container">
              <Lottie animationData={item.animation} />
            </div>
          </div>
        </SkeletonBlock>
      ))}
    </div>
  );
}
