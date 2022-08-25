import React, { useContext } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { FilterContext } from "../App";

const FilterTabs = () => {
  const { tabFilter, setTabFilter, setFilterClass } = useContext(FilterContext);
  const handleChange = (e, value) => {
    setTabFilter(value);
    if (value === "customFilter") setFilterClass("");
  };
  return (
    <Box sx={{ marginBottom: "2rem" }}>
      <Tabs
        value={tabFilter}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value="instaFilter" label="Instagram Filters" />
        <Tab value="customFilter" label="Custom Filter" />
      </Tabs>
    </Box>
  );
};

export default FilterTabs;
