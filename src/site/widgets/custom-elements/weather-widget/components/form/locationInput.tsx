import React from "react";
import { Search, FormField, Box } from "@wix/design-system";

interface LocationInputProps {
  location: string;
  setLocation: (value: string) => void;
  placeholder?: string;
  isError?: boolean;
}

export const LocationInput = ({
  location,
  setLocation,
  placeholder = "Enter city, address, or zip code",
  isError = false,
}: LocationInputProps) => {
  return (
    <Box direction="vertical" width="100%" align="center">
      <FormField
        status={isError ? "warning" : undefined}
        statusMessage={isError ? "Please enter a location" : undefined}
        stretchContent
      >
        <Search
          name="location"
          defaultValue={location}
          value={location}
          placeholder={placeholder}
          clearButton
          onChange={(e) => setLocation(e.target.value)}
          onClear={() => setLocation("")}
        />
      </FormField>
    </Box>
  );
};
