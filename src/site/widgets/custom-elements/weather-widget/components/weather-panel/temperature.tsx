import React from "react";
import { Heading } from "@wix/design-system";

interface TemperatureProps {
  temp: number;
  tempScale: "us" | "metric";
}

export const Temperature = ({ temp, tempScale }: TemperatureProps) => {
  let unit = "F";
  if (tempScale === "metric") {
    unit = "C";
  }

  return (
    <div className="temperature">
      <Heading size="extraLarge" weight="bold">
        {temp}° {unit}
      </Heading>
    </div>
  );
};
