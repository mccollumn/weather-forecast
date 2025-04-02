import React from "react";
import { Button, Loader } from "@wix/design-system";

interface GetWeatherButtonProps {
  isLoading: boolean;
}

export const GetWeatherButton = ({ isLoading }: GetWeatherButtonProps) => {
  const buttonText = isLoading ? <Loader size="tiny" /> : "Get Weather";

  return (
    <Button as="button" type="submit">
      {buttonText}
    </Button>
  );
};
