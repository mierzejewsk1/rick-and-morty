import React from "react";
import { CHARACTER_STATUS_VALUE } from "../../config/config";
import { useTheme } from "@mui/material/styles";

type CharacterStatusProps = {
  status: string;
};

const CharacterStatus: React.FC<CharacterStatusProps> = ({ status }) => {
  const theme = useTheme();

  function getStatusColor() {
    switch (true) {
      case status === CHARACTER_STATUS_VALUE.ALIVE:
        return theme.palette.success.light;
      case status === CHARACTER_STATUS_VALUE.DEAD:
        return theme.palette.error.light;
      default:
        return theme.palette.info.dark;
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: "-2px",
        left: "50%",
        alignItems: "center",
        display: "flex",
        transform: "translateX(-50%)",
        borderRadius: "10px",
        border: "1px solid black",
        padding: "0 2rem",
        backgroundColor: getStatusColor(),
        fontSize: "1.2rem",
      }}
    >
      {status}
    </div>
  );
};

export default CharacterStatus;
