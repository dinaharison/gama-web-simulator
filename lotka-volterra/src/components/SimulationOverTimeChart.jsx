import ReactECharts from "echarts-for-react";
import useSimulationOverTime from "../hooks/useSimulationOverTime";

function SimulationOverTimeChart() {
  const options = useSimulationOverTime();
  return (
    <ReactECharts
      style={{ width: "90%", height: "400px" }}
      opts={{ renderer: "canvas", width: "auto", height: "auto" }}
      option={options}
    />
  );
}

export default SimulationOverTimeChart;
