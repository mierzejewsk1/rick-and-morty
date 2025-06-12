import { Button } from "@mui/material";
import { useTheme } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

type ClearButtonProps = {
  handleClear: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ClearButton: React.FC<ClearButtonProps> = ({ handleClear }) => {
  const theme = useTheme();
  return (
    <Button
      onClick={(e) => handleClear(e)}
      sx={{
        gap: "0.5rem",
        border: `1px solid ${theme.palette.error.dark}`,
        height: "100%",
        width: "12rem",
        padding: "1rem 6rem",
        backgroundColor: theme.palette.error.main,
        color: "white",
        "&:hover": { backgroundColor: theme.palette.error.light },
      }}
    >
      <DeleteOutlineOutlinedIcon fontSize="large" />
      <span>Clear</span>
    </Button>
  );
};

export default ClearButton;
