import React from "react";
import { Pause } from "@mui/icons-material";
import { Fab } from "@mui/material";
import useConnectionStore from "../store/useConnectionStore";
import { useState } from "react";

function PauseButton() {
  const { sendMessage, experimentId } = useConnectionStore();
  const [notification, setNotification] = useState("");

  const handlePauseCommand = () => {
    if (!experimentId) {
      //error notification
      setNotification("No experiment loaded");
      return;
    }

    const command = {
      type: "pause",
      exp_id: experimentId,
    };

    sendMessage(command);
    setNotification(`Experiment ${experimentId} paused`);
  };

  return (
    <Fab variant="outlined" onClick={handlePauseCommand}>
      <Pause />
    </Fab>
  );
}

export default PauseButton;
