import React from "react";
import { Box, EmptyState } from "@wix/design-system";
import { CurrentWeather } from "./currentWeather";
import { Forecast } from "./forecast";
import { WeatherData } from "@/types";

interface WeatherPanelProps {
  weatherData: WeatherData;
  tempScale: "us" | "metric";
}

export const WeatherPanel = ({ weatherData, tempScale }: WeatherPanelProps) => {
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
    <Box direction="vertical" gap="10px" width="100%" height="100%">
      <CurrentWeather
        weatherData={currentWeather}
        city={city}
        tempScale={tempScale}
      />
      <Forecast weatherDataDaily={days} />
    </Box>
  );
};
