import { Button } from "@mui/material";
import { useTheme } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

type SearchButtonProps = {
  handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SearchButton: React.FC<SearchButtonProps> = ({ handleSearch }) => {
  const theme = useTheme();
  return (
    <Button
      onClick={(e) => handleSearch(e)}
      sx={{
        gap: "0.5rem",
        border: `1px solid ${theme.palette.primary.dark}`,
        height: "100%",
        width: "12rem",
        padding: "1rem 6rem",
        backgroundColor: theme.palette.primary.main,
        fontSize: "1.4rem",
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
          cursor: "pointer",
        },
      }}
    >
      <SearchOutlinedIcon fontSize="large" />
      <span>Search</span>
    </Button>
  );
};

export default SearchButton;
