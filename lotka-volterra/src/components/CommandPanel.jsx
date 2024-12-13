import React from "react";
import { Stack } from "@mui/material";
import ParameterModal from "./ParameterModal";
import PlayButton from "./PlayButton";
import ReloadButton from "./ReloadButton";
import PauseButton from "./PauseButton";

function CommandPanel() {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        position: "fixed",
        bottom: 16, // Bottom-most FAB
        right: 16,
      }}
    >
      <ParameterModal />
      <PlayButton />
      <PauseButton />
      <ReloadButton />
    </Stack>
  );
}

export default CommandPanel;
