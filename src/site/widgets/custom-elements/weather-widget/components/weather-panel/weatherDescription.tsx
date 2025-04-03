import React from "react";
import { Text, Box } from "@wix/design-system";

export const WeatherDescription = ({
  description,
}: {
  description: string;
}) => {
  return (
    <Box className="weather-description" align="center">
      <Text size="tiny" ellipsis>
        {description}
      </Text>
    </Box>
  );
};
