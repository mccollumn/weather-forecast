import React from "react";
import { Box, Heading, Divider } from "@wix/design-system";
// import { ToastComponent } from "./components/toast";
import { Toast } from "../toast";
import { getData } from "../../utils";
import { GetWeatherButton } from "./getWeatherButton";
import { LocationInput } from "./locationInput";
import { TempScaleSelection } from "./tempScaleSelection";
import { TempScale } from "@/types";

interface FormProps {
  title: string;
  setData: (data: any) => void;
}

export const Form = ({ title, setData }: FormProps) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const [tempScale, setTempScale] = React.useState<TempScale>("us");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Location:", location);
    console.log("Temperature Scale:", tempScale);
    if (!location) {
      setIsError(true);
      return;
    }

    setIsLoading(true);
    const res = await getData(location, tempScale);
    console.log("res", res);
    if (!res.ok) {
      // TODO: Test this toast after deploy. Documentation says it won't work in dev.
      <Toast
        message="Could not retreive weather for that location."
        type="error"
      />;
      setIsLoading(false);
      return;
    }
    setData(await res.json());
    console.log("Form submitted");
    setIsLoading(false);
  };

  return (
    <Box direction="vertical" gap="20px" align="center">
      <Heading>{title}</Heading>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Box direction="vertical" gap="20px" width="100%">
          <LocationInput
            location={location}
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
