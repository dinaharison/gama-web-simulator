import { CircularProgress, Typography, Stack } from "@mui/material";
import useConnectionStore from "../store/useConnectionStore";
import { useEffect, useState } from "react";
import { ServerStatus } from "../data/ServerStatus";

function Loading({ children }) {
  const { experimentId, serverStatus } = useConnectionStore();
  const [notification, setNotification] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (serverStatus != ServerStatus.connected) {
      setNotification("Trying to connect to the server");
      if (!experimentId) {
        setNotification("Waiting for the model to be loaded");
      }
    }

    setIsReady(!experimentId ? false : true);
  }, [experimentId, serverStatus, isReady]);

  if (!isReady) {
    return (
      <>
        <Stack
          direction="column"
          gap={5}
          alignItems="center"
          justifyItems="center"
          sx={{ height: "85%", width: 1 }}
        >
          <Typography variant="h5" textAlign="center">
            {notification}
          </Typography>
          <CircularProgress size={150} />
        </Stack>
      </>
    );
  }

  return <>{children}</>;
}

export default Loading;
