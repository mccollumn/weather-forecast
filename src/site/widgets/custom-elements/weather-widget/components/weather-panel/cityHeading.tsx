import React from "react";
import { Heading, Box } from "@wix/design-system";
import { FavoriteLocation } from "./favoriteLocation";

export const CityHeading = ({ cityName }: { cityName: string }) => {
  return (
    <Box className="city-heading" align="center">
      <Heading size="small" weight="bold" ellipsis>
        {cityName}
      </Heading>
      <FavoriteLocation currentLocation={cityName} />
    </Box>
  );
};
