import React, { useEffect } from "react";
import useConnection from "../hooks/useConnection";
import { Grid2 as Grid, Stack, Box } from "@mui/material";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ParameterModal from "../components/ParameterModal";
import PlayButton from "../components/PlayButton";
import SimulationOverTimeChart from "../components/SimulationOverTimeChart";
import SimulationPhaseChart from "../components/SimulationPhaseChart";

function SimulationPage() {
  const server = useConnection();

  return (
    <Grid container sx={{ width: 1, height: 1 }}>
      <Stack direction="column" spacing={1} sx={{ width: 1, height: 1 }}>
        <Header></Header>
        <Loading>
          <SimulationOverTimeChart />
          <SimulationPhaseChart />
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
          </Stack>
        </Loading>
      </Stack>
    </Grid>
  );
}

export default SimulationPage;
