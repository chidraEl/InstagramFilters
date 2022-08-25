import React, { useRef, useState, useContext } from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FilterContext } from "../App";
import "../styles/instagram.css";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const StyleBox = styled(Box)({
  background: "#fff",
  border: "1px solid #eee",
  minHeight: "100px",
  maxHeight: "70vh",
  marginBottom: "1rem",
  borderRadius: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: ".3s",
  objectFit: "contain",
  padding: "5px",
  overflow: "hidden",
});

const StyledImg = styled("img")((props) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  transition: ".3s",
  filter: `contrast(${props.customFilter.contrast}%) 
  brightness(${props.customFilter.brightness}%)
  saturate(${props.customFilter.saturate}%)
  sepia(${props.customFilter.sepia}%)
  grayScale(${props.customFilter.gray}%)
  `,
}));

const ImageField = () => {
  const uploadInputRef = useRef(null);
  const imgRef = useRef(null);
  const { filterClass, customFilter, imageFile, setImageFile } =
    useContext(FilterContext);

  const handleChangeInput = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleDownload = (e) => {
    domtoimage
      .toBlob(imgRef.current)
      .then(function (blob) {
        saveAs(blob, new Date().getTime() + ".png");
      })
      .catch((err) => {
        console.log("Oups! something went wrong." + err);
      });
  };

  const renderImage = () => {
    return (
      <figure>
        <StyledImg
          customFilter={!filterClass && customFilter}
          className={filterClass}
          src={imageFile}
          alt=""
          ref={imgRef}
        />
      </figure>
    );
  };

  return (
    <Grid item xs={12} md={7}>
      <StyleBox
        onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
      >
        {imageFile ? (
          renderImage()
        ) : (
          <Typography sx={{ fontSize: "16px" }}>
            Choose an image to edit
          </Typography>
        )}
      </StyleBox>
      <input
        onChange={handleChangeInput}
        type="file"
        accept="image/*"
        hidden
        ref={uploadInputRef}
      />
      {imageFile && (
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: "10px" }}
          onClick={handleDownload}
        >
          Download
        </Button>
      )}
    </Grid>
  );
};

export default ImageField;
