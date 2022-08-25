import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useContext } from "react";
import { FilterContext } from "../App";
import { filterValues } from "../utils";

const StyledFilterContainer = styled(Box)({
  background: "#ddd",
  borderRadius: "10px",
  width: "100px",
  minWidth: "100px",
  height: { xs: "80px", md: "200px" },
  minHeight: "80px",
  maxHeight: "120px",
  objectFit: "contain",
  overflow: "hidden",
  position: "relative",
  transition: ".3s",
  img: {
    width: "100%",
    maxHeight: "100%",
    minHeight: "80px",
    objectFit: "cover",
  },
  p: {
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    margin: 0,
    padding: "6px 3px",
    width: "100%",
    color: "#fff",
    fontSize: "16px",
    background: "linear-gradient(360deg, black, transparent)",
  },
  "&:hover": {
    transform: "scale(1.03)",
    transition: ".3s",
    boxShadow: "2px 2px 10px rgba(0,0,0,.2)",
  },
});

const InstaFilter = () => {
  const { filterClass, setFilterClass, imageFile } = useContext(FilterContext);

  const handleClick = (filterClass) => {
    console.log(filterClass);
    setFilterClass(filterClass);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexWrap: { md: "wrap" },
          maxHeight: { md: "300px" },
          overflow: "auto",
          padding: "5px 3px",
        }}
        fullWidth
      >
        {filterValues?.map((filter) => (
          <Box sx={{ display: "block", textAlign: "center" }}>
            <StyledFilterContainer
              key={filter.class}
              onClick={() => handleClick(filter.class)}
            >
              <img src={imageFile} alt="" className={filter.class} />
              <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                {filter.name}
              </Typography>
            </StyledFilterContainer>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InstaFilter;
