import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/not-found/PageNotFound";
import Home from "./features/location/pages/Home";
import DenyPage from "./features/access-denied/pages/DenyPage";
import WeatherPage from "./features/Weather/pages/WeatherPage";
import AppInitializer from "./shared/components/AppInitializer";
import TodayDetails from "./features/today-details/pages/TodayDetails";

function App() {
  return (
    <>
      <AppInitializer />

      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="weatherPage">
          <Route index element={<WeatherPage />} />

          <Route path=":day" element={<TodayDetails />} />
        </Route>

        <Route path="denyPage" element={<DenyPage />} />
      </Routes>
    </>
  );
}
export default App;
