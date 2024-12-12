import React, { useState } from "react";
import { useParameterStore } from "../store/useParameterStore";
import useConnectionStore from "../store/useConnectionStore";
import { useSimulationStore } from "../store/useSimulationStore";
import { Fab } from "@mui/material";
import { Replay } from "@mui/icons-material";

function ReloadButton() {
  const [notification, setNotification] = useState("");
  const { sendMessage, experimentId } = useConnectionStore();
  const { parameters } = useParameterStore();
  const { resetData } = useSimulationStore();

  const handleReloadCommand = () => {
    if (!experimentId) {
      //error notification
      setNotification("No experiment loaded");
      return;
    }

    const command = {
      type: "reload",
      exp_id: experimentId,
      parameters: parameters,
    };

    sendMessage(command);
    resetData();
    setNotification("Reload Command sent");
  };

  return (
    <Fab variant="outlined" onClick={handleReloadCommand}>
      <Replay />
    </Fab>
  );
}

export default ReloadButton;
