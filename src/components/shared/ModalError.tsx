import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import errorImgPng from "../../assets/images/error.png";
import errorImg from "../../assets/images/webpimages/error.webp";

const ModalErrorBox = styled(Box)(() => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  marginTop: "5rem",
}));

type ModalErrorProps = {
  label: string;
};

const ModalError: React.FC<ModalErrorProps> = ({ label }) => {
  return (
    <ModalErrorBox>
      <p style={{ textAlign: "center" }}>{label}</p>
      <picture>
        <source srcSet={errorImg} />
        <img src={errorImgPng} style={{ width: "30rem" }} />
      </picture>
    </ModalErrorBox>
  );
};

export default ModalError;
