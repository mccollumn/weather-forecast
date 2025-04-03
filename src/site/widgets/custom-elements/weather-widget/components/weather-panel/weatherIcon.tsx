import React from "react";
import { Image } from "@wix/design-system";
import { WeatherIcons } from "@/types";

interface WeatherIconProps {
  icon: WeatherIcons;
}

export const WeatherIcon = ({
  icon,
  ...props
}: WeatherIconProps & React.ComponentProps<typeof Image>) => {
  const iconMap: Record<WeatherIcons, string> = {
    snow: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/2nd%20Set%20-%20Color/snow.svg",
    rain: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/2nd%20Set%20-%20Color/rain.svg",
    fog: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/2nd%20Set%20-%20Color/fog.svg",
    wind: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/2nd%20Set%20-%20Color/wind.svg",
    cloudy:
      "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/2nd%20Set%20-%20Color/cloudy.svg",
    "partly-cloudy-day":
      "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/2nd%20Set%20-%20Color/partly-cloudy-day.svg",
    "partly-cloudy-night":
      "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/2nd%20Set%20-%20Color/partly-cloudy-night.svg",
    "clear-day":
      "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/2nd%20Set%20-%20Color/clear-day.svg",
    "clear-night":
      "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/2nd%20Set%20-%20Color/clear-night.svg",
  };

  return (
    <Image
      src={iconMap[icon]}
      alt={icon}
      fit="contain"
      transparent
      {...props}
    />
  );
};
