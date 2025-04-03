import React from "react";
import { Box, Heading, Divider } from "@wix/design-system";
import { Toast } from "../toast";
import { getData } from "../../utils";
import { GetWeatherButton } from "./getWeatherButton";
import { LocationInput } from "./locationInput";
import { TempScaleSelection } from "./tempScaleSelection";
import { TempScale } from "@/types";

interface FormProps {
  title: string;
  setData: (data: any) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  tempScale: TempScale;
  setTempScale: (tempScale: TempScale) => void;
}

export const Form = ({
  title,
  setData,
  isLoading,
  setIsLoading,
  tempScale,
  setTempScale,
}: FormProps) => {
  const [isError, setIsError] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  const loadWeatherData = async () => {
    setIsLoading(true);
    const res = await getData(location, tempScale);
    if (!res.ok) {
      <Toast
        message="Could not retreive weather for that location."
        type="error"
      />;
      setIsLoading(false);
      return;
    }
    setData(await res.json());
    setIsLoading(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!location) {
      setIsError(true);
      return;
    }
    setIsError(false);
    loadWeatherData();
    setHasSubmitted(true);
  };

  React.useEffect(() => {
    if (location && hasSubmitted) {
      loadWeatherData();
    }
  }, [tempScale]);

  return (
    <Box direction="vertical" gap="20px" align="center">
      <Heading>{title}</Heading>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Box direction="vertical" gap="20px" width="100%">
          <LocationInput
            location={hasSubmitted ? "" : location}
            setLocation={setLocation}
            isError={isError}
          />
          <TempScaleSelection setTempScale={setTempScale} />
          <GetWeatherButton isLoading={isLoading} />
        </Box>
      </form>
    </Box>
  );
};
