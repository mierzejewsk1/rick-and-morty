import React from "react";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import NavigationSideMenu from "./NavigationSideMenu";

const NavigationStyled = styled(Box)(({ theme }) => ({
  gap: 1,
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

type NavigationItem = {
  name: string;
  link: string;
};

type NavigationListMobileProps = {
  toggleNav: (isOpen: boolean) => void;
  navigationList: NavigationItem[];
  isOpen: boolean;
};

const NavigationListMobile: React.FC<NavigationListMobileProps> = ({
  toggleNav,
  navigationList,
  isOpen,
}) => {
  return (
    <NavigationStyled>
      <IconButton onClick={() => toggleNav(true)}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <NavigationSideMenu
        isOpen={isOpen}
        toggleNav={toggleNav}
        navigationList={navigationList}
      />
    </NavigationStyled>
  );
};

export default NavigationListMobile;
