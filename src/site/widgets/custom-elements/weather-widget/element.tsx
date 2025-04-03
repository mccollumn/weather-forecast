import React, { type FC } from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import { Layout, Cell } from "@wix/design-system";
import { getFavoriteLocation, getData } from "./utils";
import { Form } from "./components/form/form";
import { WeatherPanel } from "./components/weather-panel/weatherPanel";
import { TempScale } from "@/types";
import "@wix/design-system/styles.global.css";
import styles from "./element.module.css";

interface Props {
  displayName?: string;
}

const CustomElement: FC<Props> = ({ displayName = `Weather Forecast` }) => {
  const [data, setData] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [tempScale, setTempScale] = React.useState<TempScale>("us");

  React.useEffect(() => {
    const loadFavoriteLocation = async () => {
      const favoriteLocation = await getFavoriteLocation();
      if (!favoriteLocation) {
        return;
      }

      const res = await getData(favoriteLocation, tempScale);
      if (res.ok) {
        const data = await res.json();
        setData(data);
      } else {
        console.error("Error fetching weather data:", res.statusText);
      }
    };
    loadFavoriteLocation();
  }, [tempScale]);

  return (
    <div className={styles.root}>
      <Layout gap="20px">
        <Cell span={6}>
          <Form
            title={displayName}
            setData={setData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            tempScale={tempScale}
            setTempScale={setTempScale}
          />
        </Cell>
        <Cell span={6}>
          <WeatherPanel
            weatherData={data}
            tempScale={tempScale}
            isLoading={isLoading}
          />
        </Cell>
      </Layout>
    </div>
  );
};

const customElement = reactToWebComponent(
  CustomElement,
  React,
  ReactDOM as any,
  {
    props: {
      displayName: "string",
    },
  }
);

export default customElement;
