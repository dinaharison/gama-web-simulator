import React, { useEffect, useState } from "react";
import { Typography, Slider, Stack } from "@mui/material";
import useDebounce from "../hooks/useDebounce";

function SliderParameter({ props }) {
  const [sliderValue, setSliderValue] = useState(props.value);
  const debouncedValue = useDebounce(sliderValue, 400);

  const handleChange = (e) => {
    setSliderValue(e.target.value);
  };

  useEffect(() => {
    props.changeCallback(debouncedValue);
  }, [debouncedValue]);

  return (
    <Stack spacing={1} padding={1} direction="column">
      <Typography id={props.id} gutterBottom>
        {props.name}
      </Typography>
      <Slider
        value={sliderValue}
        defaultValue={props.defaultValue}
        min={props.min}
        step={props.step}
        max={props.max}
        onChange={handleChange}
        aria-labelledby={props.id}
        valueLabelDisplay="auto"
      />
    </Stack>
  );
}

export default SliderParameter;
