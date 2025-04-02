import React from "react";
import { dashboard } from "@wix/dashboard";
// import { Toast, Text } from "@wix/design-system";

// TODO: Test this toast after deploy. Documentation says it won't work in dev.
// The documentation says to use showToast but there appears to be a Toast component.

interface ToastProps {
  message: string;
  type: "error" | "warning" | "success";
}

// export const ToastComponent = ({ message, type }: ToastProps) => {
//   // React.useEffect(() => {
//   // }, [message, type]);

//   return (
//     <Toast key="location-warning" dismissible>
//       <Text>{message}</Text>
//     </Toast>
//   );
// };

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
