import React, { useReducer } from "react";
import Alert from "../Alert";

const initialState = {
  isOpen: false,
  message: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "openAlert":
      return { isOpen: true, message: action.message };
    case "closeAlert":
      return { isOpen: false, message: "" };

    default:
      return state;
  }
};

const AlertContext = React.createContext();
const AlertConsumer = AlertContext.Consumer;

const AlertProvider = props => {
  const { children } = props;

  const [alertContext, dispatchApp] = useReducer(reducer, initialState);

  const value = { alertContext, dispatchApp };

  return (
    <AlertContext.Provider value={value}>
      <Alert />
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
export { AlertContext, AlertConsumer };
