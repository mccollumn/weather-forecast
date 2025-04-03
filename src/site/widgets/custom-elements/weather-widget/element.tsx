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
  const [data, setData] = React.useState<any>(sampleData);
  // const [data, setData] = React.useState<any>(null);
  // TODO: Probably need to set tempScale state here instead of in the form
  const [tempScale, setTempScale] = React.useState<TempScale>("us");

  React.useEffect(() => {
    const loadFavoriteLocation = async () => {
      const favoriteLocation = await getFavoriteLocation();
      console.log("favoriteLocation", favoriteLocation);
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

  console.log("Data", data);

  return (
    <div className={styles.root}>
      <Layout gap="20px">
        <Cell span={6}>
          <Form title={displayName} setData={setData} />
        </Cell>
        <Cell span={6}>
          <WeatherPanel weatherData={data} tempScale={tempScale} />
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

const sampleData = {
  queryCost: 1,
  latitude: 45.5118,
  longitude: -122.676,
  resolvedAddress: "Portland, OR, United States",
  address: "portland",
  timezone: "America/Los_Angeles",
  tzoffset: -7,
  days: [
    {
      datetime: "2025-04-02",
      datetimeEpoch: 1743577200,
      tempmax: 51,
      tempmin: 42,
      temp: 47.1,
      feelslikemax: 51,
      feelslikemin: 42,
      feelslike: 45.8,
      dew: 40.3,
      humidity: 77.3,
      precip: 0.139,
      precipprob: 100,
      precipcover: 29.17,
      preciptype: ["rain"],
      snow: 0,
      snowdepth: 0,
      windgust: 11.4,
      windspeed: 5.8,
      winddir: 264.4,
      pressure: 1015.6,
      cloudcover: 77,
      visibility: 10,
      solarradiation: 135.5,
      solarenergy: 11.7,
      uvindex: 5,
      severerisk: 10,
      sunrise: "06:48:13",
      sunriseEpoch: 1743601693,
      sunset: "19:40:54",
      sunsetEpoch: 1743648054,
      moonphase: 0.15,
      conditions: "Rain, Partially cloudy",
      description: "Partly cloudy throughout the day with rain.",
      icon: "rain",
      stations: ["F8831", "KVUO", "KPDX", "KTTD"],
      source: "comb",
    },
    {
      datetime: "2025-04-03",
      datetimeEpoch: 1743663600,
      tempmax: 56,
      tempmin: 38,
      temp: 46.1,
      feelslikemax: 56,
      feelslikemin: 38,
      feelslike: 46.1,
      dew: 38.8,
      humidity: 77.4,
      precip: 0,
      precipprob: 4,
      precipcover: 0,
      preciptype: null,
      snow: 0,
      snowdepth: 0,
      windgust: 9.2,
      windspeed: 4.7,
      winddir: 332.6,
      pressure: 1021,
      cloudcover: 43.9,
      visibility: 10.1,
      solarradiation: 212.1,
      solarenergy: 18.3,
      uvindex: 6,
      severerisk: 10,
      sunrise: "06:46:21",
      sunriseEpoch: 1743687981,
      sunset: "19:42:11",
      sunsetEpoch: 1743734531,
      moonphase: 0.18,
      conditions: "Partially cloudy",
      description: "Partly cloudy throughout the day.",
      icon: "partly-cloudy-day",
      stations: null,
      source: "fcst",
    },
    {
      datetime: "2025-04-04",
      datetimeEpoch: 1743750000,
      tempmax: 67.9,
      tempmin: 36.9,
      temp: 51.3,
      feelslikemax: 67.9,
      feelslikemin: 36.9,
      feelslike: 51.3,
      dew: 38.6,
      humidity: 65.9,
      precip: 0.004,
      precipprob: 0,
      precipcover: 4.17,
      preciptype: ["rain"],
      snow: 0,
      snowdepth: 0,
      windgust: 15,
      windspeed: 8.3,
      winddir: 52.9,
      pressure: 1024.7,
      cloudcover: 9.6,
      visibility: 10.1,
      solarradiation: 287.3,
      solarenergy: 24.9,
      uvindex: 8,
      severerisk: 10,
      sunrise: "06:44:29",
      sunriseEpoch: 1743774269,
      sunset: "19:43:29",
      sunsetEpoch: 1743821009,
      moonphase: 0.25,
      conditions: "Clear",
      description: "Clear conditions throughout the day.",
      icon: "clear-day",
      stations: null,
      source: "fcst",
    },
    {
      datetime: "2025-04-05",
      datetimeEpoch: 1743836400,
      tempmax: 67.6,
      tempmin: 45.8,
      temp: 55.5,
      feelslikemax: 67.6,
      feelslikemin: 42.5,
      feelslike: 54.4,
      dew: 40.6,
      humidity: 58,
      precip: 0.039,
      precipprob: 1,
      precipcover: 8.33,
      preciptype: ["rain"],
      snow: 0,
      snowdepth: 0,
      windgust: 9.6,
      windspeed: 6.9,
      winddir: 103.6,
      pressure: 1024,
      cloudcover: 40,
      visibility: 12.5,
      solarradiation: 152.4,
      solarenergy: 13.2,
      uvindex: 5,
      severerisk: 10,
      sunrise: "06:42:37",
      sunriseEpoch: 1743860557,
      sunset: "19:44:47",
      sunsetEpoch: 1743907487,
      moonphase: 0.25,
      conditions: "Partially cloudy",
      description: "Partly cloudy throughout the day.",
      icon: "partly-cloudy-day",
      stations: null,
      source: "fcst",
    },
    {
      datetime: "2025-04-06",
      datetimeEpoch: 1743922800,
      tempmax: 59.6,
      tempmin: 49.2,
      temp: 53.9,
      feelslikemax: 59.6,
      feelslikemin: 48.3,
      feelslike: 53.7,
      dew: 47.8,
      humidity: 80.1,
      precip: 0.107,
      precipprob: 63,
      precipcover: 20.83,
      preciptype: ["rain"],
      snow: 0,
      snowdepth: 0,
      windgust: 11.9,
      windspeed: 8.1,
      winddir: 174.5,
      pressure: 1019.2,
      cloudcover: 68.4,
      visibility: 14.4,
      solarradiation: 33.1,
      solarenergy: 2.9,
      uvindex: 1,
      severerisk: 10,
      sunrise: "06:40:45",
      sunriseEpoch: 1743946845,
      sunset: "19:46:04",
      sunsetEpoch: 1743993964,
      moonphase: 0.29,
      conditions: "Rain, Partially cloudy",
      description: "Partly cloudy throughout the day with late afternoon rain.",
      icon: "rain",
      stations: null,
      source: "fcst",
    },
    {
      datetime: "2025-04-07",
      datetimeEpoch: 1744009200,
      tempmax: 54.9,
      tempmin: 48.3,
      temp: 51.2,
      feelslikemax: 54.9,
      feelslikemin: 44.3,
      feelslike: 49.7,
      dew: 46,
      humidity: 82.9,
      precip: 0.059,
      precipprob: 75,
      precipcover: 12.5,
      preciptype: ["rain"],
      snow: 0,
      snowdepth: 0,
      windgust: 17.2,
      windspeed: 9.6,
      winddir: 204.3,
      pressure: 1019.8,
      cloudcover: 66.3,
      visibility: 15,
      solarradiation: 162.5,
      solarenergy: 14,
      uvindex: 5,
      severerisk: 10,
      sunrise: "06:38:54",
      sunriseEpoch: 1744033134,
      sunset: "19:47:22",
      sunsetEpoch: 1744080442,
      moonphase: 0.32,
      conditions: "Rain, Partially cloudy",
      description:
        "Partly cloudy throughout the day with a chance of rain throughout the day.",
      icon: "rain",
      stations: null,
      source: "fcst",
    },
  ],
  stations: {
    F8831: {
      distance: 6852,
      latitude: 45.462,
      longitude: -122.727,
      useCount: 0,
      id: "F8831",
      name: "FW8831 Portland OR US",
      quality: 0,
      contribution: 0,
    },
    KPDX: {
      distance: 11467,
      latitude: 45.6,
      longitude: -122.6,
      useCount: 0,
      id: "KPDX",
      name: "KPDX",
      quality: 100,
      contribution: 0,
    },
    KTTD: {
      distance: 20411,
      latitude: 45.55,
      longitude: -122.42,
      useCount: 0,
      id: "KTTD",
      name: "KTTD",
      quality: 99,
      contribution: 0,
    },
    KVUO: {
      distance: 12109,
      latitude: 45.62,
      longitude: -122.66,
      useCount: 0,
      id: "KVUO",
      name: "KVUO",
      quality: 100,
      contribution: 0,
    },
  },
};

export default customElement;
