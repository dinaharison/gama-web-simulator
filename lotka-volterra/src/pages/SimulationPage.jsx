import React, { useEffect } from "react";
import useConnection from "../hooks/useConnection";
import { Grid2 as Grid, Stack } from "@mui/material";
import Header from "../components/Header";
import Loading from "../components/Loading";
import CommandPanel from "../components/CommandPanel";
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
          <CommandPanel />
        </Loading>
      </Stack>
    </Grid>
  );
}

export default SimulationPage;
