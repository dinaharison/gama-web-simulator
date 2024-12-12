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
          return params
            .map(
              (point) =>
                `${point.seriesName}: X: ${point.data[0]}, Y: ${point.data[1]}`
            )
            .join("<br/>");
        },
      },
      xAxis: {
        type: "value",
        name: "Prey",
        nameLocation: "middle",
        nameTextStyle: {
          fontSize: 14,
        },
        min: 0,
        max: "dataMax",
      },
      yAxis: {
        type: "value",
        name: "Predator",
        nameLocation: "middle",
        nameTextStyle: {
          fontSize: 14,
        },
        min: 0,
        max: "dataMax",
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
