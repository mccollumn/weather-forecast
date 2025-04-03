import React from "react";
import { dashboard } from "@wix/dashboard";
// import { Toast, Text } from "@wix/design-system";

interface ToastProps {
  message: string;
  type: "error" | "warning" | "success";
}

export const Toast = ({ message, type }: ToastProps) => {
  React.useEffect(() => {
    dashboard.showToast({
      message,
      type: type,
      timeout: "normal",
    });
  }, [message, type]);

  return null;
};

// export const ToastComponent = ({ message, type }: ToastProps) => {
//   // React.useEffect(() => {
//   // }, [message, type]);

//   return (
//     <Toast key="location-warning" dismissible>
//       <Text>{message}</Text>
//     </Toast>
//   );
// };
