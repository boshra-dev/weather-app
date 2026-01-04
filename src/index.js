import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./features/Weather/components/App.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./features/location/components/Home.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./pages/not-found/PageNotFound.css";
import "../src/features/access-denied/components/DenyPage.css";
import "./features/today-details/components/TodayDetailes.css";
import "./shared/components/day-cards/DayCards.css";
import "./shared/components/draw-chart/DrawChart.css";
import "./shared/components/header/Header.css";
import "./shared/components/spinner/Spinner.css";
import "./shared/components/skeleton/Skeleton.css";
import DaysProvider from "./shared/hooks/DaysListContext";
import WeatherContextProvider from "./shared/hooks/WeatherContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DaysProvider>
        <WeatherContextProvider>
          <App />
        </WeatherContextProvider>
      </DaysProvider>
    </BrowserRouter>
  </React.StrictMode>
);
