import React from "react";
import { Box } from "@wix/design-system";
import { Temperature } from "./temperature";
import { CityHeading } from "./cityHeading";
import { WeatherDescription } from "./weatherDescription";
import { HighLow } from "./highLow";
import { WeatherIcon } from "./weatherIcon";
import { WeatherDataDaily } from "@/types";
import { WeatherIcons } from "@/types";

interface CurrentWeatherProps {
  weatherData: WeatherDataDaily;
  city: string;
  tempScale: "us" | "metric";
}

export const CurrentWeather = ({
  weatherData,
  city,
  tempScale,
}: CurrentWeatherProps) => {
  return (
    <Box direction="vertical" align="center" gap="10px">
      <CityHeading cityName={city} />
      <WeatherDescription description={weatherData.description} />
      <Temperature temp={weatherData.temp} tempScale={tempScale} />
      <WeatherIcon
        icon={weatherData.icon as WeatherIcons}
        width="25%"
        height="25%"
      />
      <HighLow tempMax={weatherData.tempmax} tempMin={weatherData.tempmin} />
    </Box>
  );
};
