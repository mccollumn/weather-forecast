import React from "react";
import { httpClient } from "@wix/essentials";
import { Button } from "@wix/design-system";

export const GetWeatherButton = () => {
  const callMyBackend = async () => {
    const res = await httpClient.fetchWithAuth(
      `${import.meta.env.BASE_API_URL}/weather-data`
    );
    console.log(await res.text());
  };

  return (
    <Button as="button" onClick={callMyBackend}>
      Call backend GET function
    </Button>
  );
};
