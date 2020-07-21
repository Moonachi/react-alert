import { useContext } from "react";
import { AlertContext } from "../AlertContext";

const useAlert = () => {
  const { dispatchApp } = useContext(AlertContext);

  const show = message => {
    dispatchApp({
      type: "openAlert",
      message
    });
  };

  const close = () => {
    dispatchApp({
      type: "closeAlert"
    });
  };

  return { show, close };
};

export default useAlert;
