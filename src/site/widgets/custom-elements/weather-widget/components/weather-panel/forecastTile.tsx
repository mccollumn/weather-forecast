import React from "react";
import { EmptyState, Box, Text } from "@wix/design-system";
import { WeatherIcon } from "./weatherIcon";
import { WeatherDataDaily, WeatherIcons } from "@/types";

interface ForecastTileProps {
  weatherDataDaily: WeatherDataDaily;
}

export const ForecastTile = ({ weatherDataDaily }: ForecastTileProps) => {
  if (!weatherDataDaily) {
    return <EmptyState />;
  }

  const { temp, icon, datetime } = weatherDataDaily;
  const date = new Date(datetime).toLocaleDateString(undefined, {
    weekday: "short",
  });

  return (
    <Box direction="vertical" align="center" gap="5px">
      <Text size="tiny" weight="bold">
        {date}
      </Text>
      <Text size="tiny">{temp}</Text>
      <WeatherIcon icon={icon as WeatherIcons} />
    </Box>
  );
};
