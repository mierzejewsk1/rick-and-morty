import React from "react";
import { Box, Container, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logoTeal from "./../../assets/images/webpimages/logo_teal.webp";
import teleport from "./../../assets/images/webpimages/hero_img.webp";
import teleportPng from "../../assets/images/hero_img.png";
import { keyframes } from "@mui/material";

const SectionContainer = styled(Container)({
  flexDirection: "column",
  alignItems: "center",
  display: "flex",
});

const ImageBox = styled(Box)(() => ({
  display: "inline-flex",
  flexShrink: "0",
}));

const float = keyframes`
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
`;

const Home: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <SectionContainer>
        <ImageBox
          sx={{
            width: "35rem",
            [theme.breakpoints.up("md")]: {
              width: "50rem",
            },
          }}
          maxWidth="lg"
        >
          <picture
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <source srcSet={logoTeal} />
            <img
              src={logoTeal}
              style={{ width: "100%", height: "100%" }}
              alt="Rick and morty text logo"
            />
          </picture>
        </ImageBox>
        <ImageBox
          sx={{
            width: "25rem",
            [theme.breakpoints.up("md")]: {
              width: "35rem",
            },
            animation: `${float} 6s infinite`,
          }}
          maxWidth="lg"
        >
          <picture>
            <source srcSet={teleport} style={{ width: "100%" }} />
            <img
              src={teleportPng}
              style={{ width: "100%" }}
              alt="Rick and Morty into a teleport"
            />
          </picture>
        </ImageBox>
        <Box
          component="p"
          sx={{
            paddingTop: "8rem",
            width: "40rem",
            fontWeight: "200",
            fontSize: "1.7rem",
            textAlign: "center",
            color: theme.palette.primary.contrastText,
          }}
        >
          Please select an option from the navigation menu to explore different
          sections of the page.
        </Box>
      </SectionContainer>
    </>
  );
};

export default Home;
