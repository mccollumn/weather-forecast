import React, { type FC } from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import { Form } from "./components/form/form";
import "@wix/design-system/styles.global.css";
import styles from "./element.module.css";

interface Props {
  displayName?: string;
}

const CustomElement: FC<Props> = ({ displayName = `Weather Forecast` }) => {
  const [data, setData] = React.useState<any>(null);

  console.log("Data", data);

  return (
    <div className={styles.root}>
      <Form title={displayName} setData={setData} />
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
