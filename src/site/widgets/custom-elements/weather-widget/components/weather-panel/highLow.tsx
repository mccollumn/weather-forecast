import React from "react";
import { Text } from "@wix/design-system";

interface HighLowProps {
  tempMax: number;
  tempMin: number;
}

export const HighLow = ({ tempMax, tempMin }: HighLowProps) => {
  return (
    <div className="high-low">
      <Text>
        <span className="high">High: {tempMax}°</span>
        <span className="separator"> | </span>
        <span className="low">Low: {tempMin}°</span>
      </Text>
    </div>
  );
};
