import React from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import ThemeToggle from "../shared/ThemeToggle";

const NavigationStyled = styled(Box)(({ theme }) => ({
  alignItems: "center",
  gap: "3rem",
  display: "none",
  height: "100%",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const navigationItem = {
  transition: "all 0.2s ease-in",
  border: "none",
  borderBottom: `3px solid transparent`,
  borderTop: `3px solid transparent`,
  borderRadius: "0px",
  height: "100%",
  padding: "0px 10px",
  fontStyle: "normal",
  textTransform: "none",
};

type NavigationItem = {
  name: string;
  link: string;
};

type NavigationListDesktopProps = {
  navigationList: NavigationItem[];
};

const NavigationListDesktop: React.FC<NavigationListDesktopProps> = ({
  navigationList,
}) => {
  const theme = useTheme();

  return (
    <NavigationStyled>
      {navigationList.map((item, key) => (
        <Button
          component={Link}
          to={item.link}
          key={key}
          sx={{
            ...navigationItem,
            "&:hover": {
              borderBottom: `3px solid ${theme.palette.primary.main}`,
              backgroundColor: "transparent",
              cursor: "pointer",
            },
          }}
        >
          {item.name}
        </Button>
      ))}
      <ThemeToggle />
    </NavigationStyled>
  );
};

export default NavigationListDesktop;
