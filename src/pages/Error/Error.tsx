import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import MainNavigation from "../../layouts/MainNavigation/MainNavigation";
import logo from "../../assets/images/webpimages/logo.webp";
import logoMedium from "../../assets/images/webpimages/logo_medium.webp";
import logoSmall from "../../assets/images/webpimages/logo_small.webp";
import logoPng from "../../assets/images/logo.png";
import { useTheme } from "@mui/material/styles";

const ErrorContainer = styled(Container)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  display: "flex",
  paddingTop: "5rem",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: "10rem",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "30rem",
  [theme.breakpoints.up("md")]: {
    width: "40rem",
    marginLeft: "-3rem",
  },
}));

const Error: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <MainNavigation />
      <ErrorContainer maxWidth="lg">
        <ImageBox>
          <picture>
            <source srcSet={logoSmall} media="(max-width: 27.5em)" />
            <source srcSet={logoMedium} media="(max-width: 60em)" />
            <source srcSet={logo} media="(min-width: 60em)" />
            <img src={logoPng} style={{ width: "100%", height: "100%" }} />
          </picture>
        </ImageBox>
        <Typography
          variant="h1"
          sx={{
            marginTop: "3rem",
            fontSize: "2rem",
            [theme.breakpoints.up("md")]: {
              fontSize: "4rem",
            },
          }}
        >
          <span style={{ fontWeight: "bold" }}>404.</span>
          That's an error.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            marginTop: "3rem",
            fontSize: "1.5rem",
            textAlign: "center",
            [theme.breakpoints.up("md")]: {
              fontSize: "1.5rem",
            },
          }}
        >
          The requested URL was not found on this server. That's all we know.
        </Typography>
      </ErrorContainer>
    </>
  );
};

export default Error;
