import React, { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import useConnectionStore from "../store/useConnectionStore";

function PlayButton() {
  const { sendMessage, experimentId } = useConnectionStore();
  const [notification, setNotification] = useState("");

  const handlePlayCommand = () => {
    if (!experimentId) {
      //error notification
      setNotification("No experiment loaded");
      return;
    }
    const playCommand = {
      type: "play",
      exp_id: experimentId,
      sync: false,
    };
    sendMessage(playCommand);
    //sucess notification
    setNotification(`Running experiment with id : ${experimentId}`);
  };

  return (
    <Fab variant="outlined" onClick={handlePlayCommand}>
      <PlayArrow></PlayArrow>
    </Fab>
  );
}

export default PlayButton;
