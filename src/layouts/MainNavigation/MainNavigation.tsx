import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import NavigationLogo from "../../components/mainNavigation/NavigationLogo";
import NavigationListDesktop from "../../components/mainNavigation/NavigationListDesktop";
import NavigationListMobile from "../../components/mainNavigation/NavigationListMobile";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.secondary.dark}`,
  height: "6rem",
  backgroundColor: theme.palette.secondary.main,
}));

const navigationContainer = {
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",
  boxShadow: "none",
  maxWidth: "lg",
  height: "100%",
};

const contentContainer = {
  marginTop: "10rem",
};

type NavigationItem = {
  name: string;
  link: string;
};

const MainNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const navigationList: NavigationItem[] = [
    {
      name: "Characters",
      link: "/characters",
    },
    {
      name: "Episodes",
      link: "/episodes",
    },
    {
      name: "Locations",
      link: "/locations",
    },
    {
      name: "My watch list",
      link: "/my-watch-list",
    },
  ];

  return (
    <>
      <AppBarStyled>
        <Container sx={navigationContainer}>
          <NavigationLogo />
          <NavigationListDesktop navigationList={navigationList} />
          <NavigationListMobile
            navigationList={navigationList}
            toggleNav={toggleNav}
            isOpen={isOpen}
          />
        </Container>
      </AppBarStyled>
      <Box sx={contentContainer}>
        <Outlet />
      </Box>
    </>
  );
};

export default MainNavigation;
