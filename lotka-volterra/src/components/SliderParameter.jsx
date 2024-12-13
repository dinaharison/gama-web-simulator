import React, { useCallback, useEffect, useState } from "react";
import { Typography, Slider, Stack } from "@mui/material";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import useDebounce from "../hooks/useDebounce";

const Input = styled(MuiInput)`
  width: 80px;
`;

function SliderParameter({ props }) {
  const [sliderValue, setSliderValue] = useState(props.value);
  const debouncedValue = useDebounce(sliderValue, 400);

  const checkInterval = (value) => {
    if (value < props.min) {
      return props.min;
    } else if (value > props.max) {
      return props.max;
    } else {
      return value;
    }
  };

  const handleSliderChange = useCallback(
    (e) => setSliderValue(checkInterval(Number(e.target.value))),
    []
  );

  useEffect(() => {
    props.changeCallback(debouncedValue);
  }, [debouncedValue]);

  return (
    <Stack spacing={1} padding={1} direction="column">
      <Typography id={props.id} gutterBottom>
        {props.name}
      </Typography>
      <Stack spacing={1} direction="row">
        <Slider
          value={sliderValue}
          defaultValue={props.defaultValue}
          min={props.min}
          step={props.step}
          max={props.max}
          onChange={handleSliderChange}
          aria-labelledby={props.id}
          id={props.id}
          valueLabelDisplay="auto"
        />
        <Input
          id={`${props.id}-input`}
          value={sliderValue}
          size="small"
          onChange={handleSliderChange}
          onBlur={handleSliderChange}
          inputProps={{
            step: props.step,
            min: props.min,
            max: props.max,
            type: "number",
            "aria-labelledby": props.id,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default SliderParameter;
