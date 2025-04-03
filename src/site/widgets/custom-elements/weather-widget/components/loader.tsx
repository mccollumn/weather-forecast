import React from "react";
import { Loader, Box } from "@wix/design-system";

export const LoaderComponent = () => {
  return (
    <Box
      className="loader-component"
      align="center"
      verticalAlign="middle"
      height={"100%"}
    >
      <Loader />
    </Box>
  );
};
