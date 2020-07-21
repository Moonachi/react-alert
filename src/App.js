import React from "react";
import { AlertButton, AlertProvider } from "./components";
import "./App.css";

const App = () => {
  return (
    <AlertProvider>
      <AlertButton />
    </AlertProvider>
  );
};

export default App;
