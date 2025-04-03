import React from "react";
import { SegmentedToggle } from "@wix/design-system";
import { TempScale } from "@/types";

interface TempScaleSelectionProps {
  setTempScale: (value: TempScale) => void;
}

export const TempScaleSelection = ({
  setTempScale,
}: TempScaleSelectionProps) => {
  const handleTempScaleChange: (
    event: React.SyntheticEvent,
    value: string
  ) => void = (_, value) => {
    setTempScale(value as TempScale);
  };

  return (
    <SegmentedToggle
      defaultSelected="us"
      onClick={handleTempScaleChange}
      size="small"
    >
      <SegmentedToggle.Button name="tempScale" value="us">
        Fahrenheit
      </SegmentedToggle.Button>
      <SegmentedToggle.Button name="tempScale" value="metric">
        Celsius
      </SegmentedToggle.Button>
    </SegmentedToggle>
  );
};
