import React from "react";
import ReactECharts from "echarts-for-react";
import useSimulationPhase from "../hooks/useSimulationPhase";
import { useSimulationStore } from "../store/useSimulationStore";

function SimulationPhaseChart() {
  const { data } = useSimulationStore();
  const options = useSimulationPhase(data);
  return (
    <ReactECharts
      style={{ width: "90%", height: "400px" }}
      opts={{ renderer: "canvas", width: "auto", height: "auto" }}
      option={options}
    />
  );
}

export default SimulationPhaseChart;
