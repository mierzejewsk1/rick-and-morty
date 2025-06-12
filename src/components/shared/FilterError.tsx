import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import errorImgPng from "../../assets/images/error1.png";
import errorImg from "../../assets/images/webpimages/error1_small.webp";

const FilterErrorBox = styled(Box)(() => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  marginTop: "5rem",
  padding: "2rem",
}));

const FilterError: React.FC = () => {
  return (
    <FilterErrorBox>
      <p style={{ textAlign: "center" }}>
        There is no data available for these filters
      </p>
      <picture>
        <source srcSet={errorImg} />
        <img src={errorImgPng} style={{ width: "30rem" }} />
      </picture>
    </FilterErrorBox>
  );
};

export default FilterError;
