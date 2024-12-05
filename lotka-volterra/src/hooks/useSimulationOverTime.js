import { useSimulationStore } from "../store/useSimulationStore";

export default function useSimulationOverTime() {
  const { data } = useSimulationStore();
  const cycles = data.map((item) => item.cycle);
  const preyValues = data.map((item) => item.prey);
  const predatorValues = data.map((item) => item.predator);

  const options = {
    title: {
      text: "Prey and Predators over time",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Prey", "Predator"],
      right: 30,
      top: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: cycles,
      axisLabel: {
        interval: 99,
        formatter: (value, index) => {
          return index % 100 === 0 ? value : "";
        },
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Prey",
        type: "line",
        stack: "Total",
        data: preyValues,
        smooth: true,
      },
      {
        name: "Predator",
        type: "line",
        stack: "Total",
        data: predatorValues,
        smooth: true,
      },
    ],
  };

  return options;
}
