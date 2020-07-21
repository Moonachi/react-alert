import { Button } from "@material-ui/core";
import React from "react";
import { useAlert } from "components/Alert";

const AlertButton = () => {
  const ccAlert = useAlert();

  const open = () => {
    ccAlert.show("내일은 2020년 ~");
  };

  return (
    <Button color="primary" onClick={open}>
      AlertBtn
    </Button>
  );
};

export default AlertButton;
