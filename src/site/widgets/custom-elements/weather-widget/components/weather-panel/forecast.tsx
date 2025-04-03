import React from "react";
import { Box, EmptyState } from "@wix/design-system";
import { ForecastTile } from "./forecastTile";
import { WeatherDataDaily } from "@/types";

interface ForecastTileProps {
  weatherDataDaily: WeatherDataDaily[];
}

export const Forecast = ({ weatherDataDaily }: ForecastTileProps) => {
  if (!weatherDataDaily || weatherDataDaily.length === 0) {
    return <EmptyState />;
  }

  return (
    <Box direction="horizontal" align="center" gap="5px">
      {weatherDataDaily.map((day, index) => (
        <ForecastTile key={index} weatherDataDaily={day} />
      ))}
    </Box>
  );
};
