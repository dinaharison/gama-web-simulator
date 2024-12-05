import SliderParameter from "./SliderParameter";
import { useParameterStore } from "../store/useParameterStore";
import { Box } from "@mui/material";

function ParameterPanel() {
  const { parameters, updateParameter } = useParameterStore();
  return (
    <Box>
      {parameters.map((element, index) => (
        <SliderParameter
          props={{
            name: element.name,
            id: element.id,
            value: element.value,
            defaultValue: 0,
            min: element.min,
            max: element.max,
            step: element.step,
            changeCallback: (value) => updateParameter(index, value),
          }}
          key={element.id}
        />
      ))}
    </Box>
  );
}

export default ParameterPanel;
