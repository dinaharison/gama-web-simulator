import { useMemo } from "react";

export default function useSimulationPhase(data) {
  const options = useMemo(() => {
    // Prepare data points
    const equilibriumPoint = {
      x: data.map((item) => item.ratioPredator),
      y: data.map((item) => item.ratioPrey),
    };
    const preyPredatorPoints = {
      x: data.map((item) => item.prey),
      y: data.map((item) => item.predator),
    };

    return {
      title: {
        text: "Prey-Predator Dynamics",
      },
      tooltip: {
        trigger: "axis",
        formatter: (params) => {
          const [point] = params;
          return `X: ${point.data[0]}, Y: ${point.data[1]}`;
        },
      },
      xAxis: {
        type: "value",
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Equilibrium",
          type: "line",
          data: equilibriumPoint.x.map((x, i) => [x, equilibriumPoint.y[i]]), // [ratioPredator, ratioPrey]
          color: "red",
          symbolSize: 10,
        },
        {
          name: "Prey vs Predator",
          type: "line",
          data: preyPredatorPoints.x.map((x, i) => [
            x,
            preyPredatorPoints.y[i],
          ]), // [prey, predator]
          color: "blue",
          symbolSize: 8,
          smooth: true,
          showSymbol: false,
        },
      ],
    };
  }, [data]);

  return options;
}
