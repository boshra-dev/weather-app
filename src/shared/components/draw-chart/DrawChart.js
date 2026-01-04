import {
  Text,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import SkeletonBlock from "../skeleton/SkeletonBlock";
import { memo } from "react";
const DrawChart = memo(function DrawChart(props) {
  const chartData = props.chartData?.map((d) => ({
    name: d.name,
    temp: d.uv.temp,
    imgsrc: d.uv.imgsrc,
  }));
  const temperatures = chartData?.map((item) => item.temp) || [];
  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);

  const yAxisDomain = [minTemp - 1, maxTemp + 1];
  const CustomXAxisTick = (props) => {
    const { x, y, payload, data } = props;
    if (!payload?.value || !Array.isArray(data)) return null;
    const dataPoint = data?.find((d) => d.name === payload.value);

    if (!dataPoint) return null;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          max={undefined}
          x={0}
          y={0}
          dy={24}
          textAnchor="middle"
          fill="black"
          className="timeOnXaxis"
        >
          {payload.value}
        </text>

        <image
          href={`https://openweathermap.org/img/wn/${dataPoint.imgsrc}@2x.png`}
          x={-25}
          y={25}
          max={undefined}
          className="imgOnXaxis"
        />
      </g>
    );
  };
  if (props.error?.msg) return null;
  return (
    <>
      <div className="chart-container">
        <SkeletonBlock
          className={"skeleton-chart"}
          isLoading={props.isLoading}
          showContent={props.showContent}
        >
          <ResponsiveContainer
            style={{ paddingTop: "20px" }}
            width="100%"
            height="100%"
          >
            <AreaChart
              width={600}
              height={300}
              data={chartData}
              margin={{ top: 0, right: 55, bottom: 50, left: 30 }}
            >
              <Text
                x={1000}
                y={0}
                textAnchor="end"
                verticalAnchor="start"
                fontSize={16}
                fontWeight="bold"
                fill="#333"
              >
                Weather Today
              </Text>

              <defs>
                <linearGradient id="multiColorArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#26C6DA" stopOpacity={0.7} />
                  <stop offset="50%" stopColor="#80DEEA" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#E0F7FA" stopOpacity={0.2} />
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey="temp"
                stroke="#89BCE7"
                fill="url(#multiColorArea)"
                fillOpacity={0.6}
                strokeWidth={3}
                dot={{ fill: "#89BCE7", strokeWidth: "2", r: 5 }}
              />

              <XAxis
                dataKey="name"
                stroke="#ddd"
                interval={0}
                tickLine={false}
                tick={<CustomXAxisTick data={chartData} />}
                height={50}
              />

              <YAxis
                hide={props.hide}
                domain={yAxisDomain}
                tick={{ fill: "#333", fontSize: 12 }}
                tickFormatter={(value) => `${value}°C`}
                axisLine={{ stroke: "#ddd" }}
                tickLine={{ stroke: "#ddd" }}
                width={40}
                fontSize={20}
              />
              <Legend align="right" />
            </AreaChart>
          </ResponsiveContainer>
        </SkeletonBlock>
      </div>
    </>
  );
});
export default DrawChart;
