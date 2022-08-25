import { Box } from "@mui/material";
import React from "react";
import SliderField from "./SliderField";
const CustomFilter = () => {
  const slides = [
    {
      label: "Contrast",
      defaultValue: 100,
      field: "contrast",
    },
    {
      label: "Brightness",
      defaultValue: 100,
      field: "brightness",
    },
    {
      label: "Saturation",
      defaultValue: 100,
      field: "saturate",
    },
    {
      label: "Sepia",
      defaultValue: 0,
      field: "sepia",
    },
    {
      label: "Gray",
      defaultValue: 0,
      field: "gray",
    },
  ];
  return (
    <Box sx={{ mt: "2rem", maxWidth: "400px" }}>
      {slides.map((slide) => (
        <SliderField slide={slide} key={slide.field} />
      ))}
    </Box>
  );
};

export default CustomFilter;
