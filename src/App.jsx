import { Container, Box, Grid, Typography } from "@mui/material";
import { createContext, useState } from "react";
import CustomFilter from "./components/CustomFilter";
import FilterTabs from "./components/FilterTabs";
import ImageField from "./components/ImageField";
import InstaFilter from "./components/InstaFilter";
import "./styles.css";

export const FilterContext = createContext();

function App() {
  const [tabFilter, setTabFilter] = useState("instaFilter");
  const [filterClass, setFilterClass] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [customFilter, setCustomFilter] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  });
  const value = {
    tabFilter,
    setTabFilter,
    filterClass,
    setFilterClass,
    customFilter,
    setCustomFilter,
    imageFile,
    setImageFile,
  };
  return (
    <FilterContext.Provider value={value}>
      <Container sx={{ my: { xs: "1rem", md: "4rem" } }}>
        <Box sx={{ textAlign: "center" }} mb="10px">
          <Typography
            fontSize={{ xs: "24px", md: "38px", lg: "48px" }}
            fontWeight="700"
          >
            Instagram Image Filters
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <ImageField />
          {imageFile && (
            <Grid item xs={12} md={5}>
              <FilterTabs />
              {tabFilter === "instaFilter" ? <InstaFilter /> : <CustomFilter />}
            </Grid>
          )}
        </Grid>
      </Container>
    </FilterContext.Provider>
  );
}

export default App;
