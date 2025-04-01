import React, { type FC } from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import { GetWeatherButton } from "./components/getWeatherButton";
import styles from "./element.module.css";

interface Props {
  displayName?: string;
}

const CustomElement: FC<Props> = ({ displayName = `Your Widget's Title` }) => {
  return (
    <div className={styles.root}>
      <h2>{displayName}</h2>
      <hr />
      <p>
        This is a Site Widget generated by Wix CLI.
        <br />
        Continue to develop this widget at{" "}
        <code>'src/site/widgets/custom-elements/weather-widget'</code>.
      </p>
      <GetWeatherButton />
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
