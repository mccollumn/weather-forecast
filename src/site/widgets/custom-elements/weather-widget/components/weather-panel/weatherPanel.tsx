import React from "react";
import { Box, EmptyState } from "@wix/design-system";
import { CurrentWeather } from "./currentWeather";
import { Forecast } from "./forecast";
import { LoaderComponent as Loader } from "../loader";
import { WeatherData } from "@/types";
import styles from "../../element.module.css";

interface WeatherPanelProps {
  weatherData: WeatherData;
  tempScale: "us" | "metric";
  isLoading?: boolean;
}

export const WeatherPanel = ({
  weatherData,
  tempScale,
  isLoading,
}: WeatherPanelProps) => {
  if (isLoading) {
    return <Loader />;
  }
  if (!weatherData || !weatherData.days) {
    return <EmptyState />;
  }

  const { days } = weatherData;
  const currentWeather = days.shift();
  const city = weatherData.resolvedAddress || "";

  if (!currentWeather) {
    return <EmptyState />;
  }

  return (
    <div className={styles.showAnimation}>
      <Box direction="vertical" gap="10px" width="100%" height="100%">
        <CurrentWeather
          weatherData={currentWeather}
          city={city}
          tempScale={tempScale}
        />
        <Forecast weatherDataDaily={days} />
      </Box>
    </div>
  );
};
