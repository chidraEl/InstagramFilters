import { Box, Slider, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { FilterContext } from "../App";

function SliderField({ slide }) {
  const [value, setValue] = useState(slide.defaultValue);
  const { customFilter, setCustomFilter } = useContext(FilterContext);

  useEffect(() => {
    setCustomFilter({ ...customFilter, [slide.field]: value });
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginbottom: "1rem",
      }}
    >
      <Typography sx={{ mb: 0.1, width: "120px" }}>{slide.label}</Typography>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        aria-label={slide.label}
        value={value}
        sx={{
          color: "#e91e63",
          height: "4px",
          display: "flex",
          alignItems: "center",
        }}
        onChange={handleChange}
        min={0}
        max={200}
      />
    </Box>
  );
}

export default SliderField;
