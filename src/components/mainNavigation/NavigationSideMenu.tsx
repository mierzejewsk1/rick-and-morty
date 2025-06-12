import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  MenuItem,
  Divider,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTheme } from "@mui/material/styles";

const NavigationItemStyled = styled(MenuItem)(({ theme }) => ({
  justifyContent: "center",
  display: "flex",
  transition: "all 0.2s ease-out",
  padding: "2rem 5rem",
  fontSize: "1.5rem",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const DrawerContainerStyled = styled(Container)(({ theme }) => ({
  height: "100%",
  width: "20rem",
  backgroundColor: theme.palette.secondary.main,
  padding: "0",
}));

const closeIcon = {
  justifyContent: "center",
  display: "flex",
  margin: "1rem",
};

type NavigationItem = {
  name: string;
  link: string;
};

type NavigationSideMenuProps = {
  isOpen: boolean;
  toggleNav: (isOpen: boolean) => void;
  navigationList: NavigationItem[];
};

const NavigationSideMenu: React.FC<NavigationSideMenuProps> = ({
  isOpen,
  toggleNav,
  navigationList,
}) => {
  const theme = useTheme();

  return (
    <Drawer anchor="left" open={isOpen} onClose={() => toggleNav(false)}>
      <DrawerContainerStyled>
        <Box sx={closeIcon}>
          <IconButton onClick={() => toggleNav(false)}>
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </Box>
        <Divider />
        {navigationList.map((item, key) => (
          <React.Fragment key={key}>
            <Link
              to={item.link}
              style={{
                textDecoration: "none",
                color: theme.palette.primary.contrastText,
              }}
            >
              <NavigationItemStyled onClick={() => toggleNav(false)}>
                {item.name}
              </NavigationItemStyled>
            </Link>
            <Divider />
          </React.Fragment>
        ))}
      </DrawerContainerStyled>
    </Drawer>
  );
};

export default NavigationSideMenu;
