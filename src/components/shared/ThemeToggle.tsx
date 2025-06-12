import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { Tooltip } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/index";
import { themeActions } from "../../store/theme/theme";

const ThemeToggle: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch = useAppDispatch();

  function handleThemeChange() {
    dispatch(themeActions.toggleTheme());
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tooltip title="Change theme" arrow>
        {isDarkMode ? (
          <ModeNightIcon
            fontSize="large"
            onClick={handleThemeChange}
            cursor="pointer"
          />
        ) : (
          <LightModeIcon
            fontSize="large"
            onClick={handleThemeChange}
            cursor="pointer"
          />
        )}
      </Tooltip>
    </div>
  );
};

export default ThemeToggle;
