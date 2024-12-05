import React, { useState } from "react";
import ParameterPanel from "./ParameterPanel";
import {
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Build } from "@mui/icons-material";
import { useParameterStore } from "../store/useParameterStore";

function ParameterModal() {
  const [open, setOpen] = useState(false);
  const { resetParameters } = useParameterStore();
  const [panelKey, setPanelKey] = useState(0);

  const handleOpenOnClick = () => {
    setOpen(true);
  };

  const handleCloseOnclick = () => {
    setOpen(false);
  };

  const handleResetClick = () => {
    resetParameters();
    //forces parameter panel to rerender
    setPanelKey(panelKey + 1);
  };

  return (
    <>
      <Fab onClick={handleOpenOnClick}>
        <Build></Build>
      </Fab>
      <Dialog
        open={open}
        onClose={handleCloseOnclick}
        aria-labelledby="alert-dialog-title"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">{"Change parameters"}</DialogTitle>
        <DialogContent>
          <ParameterPanel key={panelKey}></ParameterPanel>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleResetClick}>Reset</Button>
          <Button onClick={handleCloseOnclick}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ParameterModal;
