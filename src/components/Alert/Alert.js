import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import React, { useContext } from "react";
import { AlertContext } from "./AlertContext";
import useAlert from "./useAlert";

const Alert = () => {
  const { alertContext } = useContext(AlertContext);
  const ccAlert = useAlert();

  const close = () => {
    ccAlert.close();
  };

  return (
    <Dialog open={alertContext.isOpen}>
      <DialogTitle>2020년</DialogTitle>
      <DialogContent>{alertContext.message}</DialogContent>
      <DialogActions>
        <Button onClick={close}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Alert;
