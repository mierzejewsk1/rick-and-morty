import React, { useState } from "react";
import { EPISODE_PARAMS } from "../../config/config";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography } from "@mui/material";
import FiltersForm from "../shared/FiltersForm";
import SearchButton from "../shared/SearchButton";
import ClearButton from "../shared/ClearButton";

type MyWatchListProps = {
  query: URLSearchParams;
};

const MyWatchListFilter: React.FC<MyWatchListProps> = ({ query }) => {
  const navigate = useNavigate();

  const name = query.get(EPISODE_PARAMS.NAME) || "";

  const [nameParam, setNameParam] = useState<string>(name);

  const setSearchingParam = (name: EPISODE_PARAMS, value: string) => {
    const isFilterDefault = !value;

    if (isFilterDefault) {
      query.delete(name);
    } else {
      query.set(name, value);
    }
  };

  const applyFiltersForPage = () => {
    navigate({
      pathname: "/my-watch-list",
      search: query.toString(),
    });
  };

  const handleFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setSearchingParam(EPISODE_PARAMS.NAME, nameParam);

    applyFiltersForPage();
  };

  const handleClearButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setNameParam("");

    query.delete(EPISODE_PARAMS.NAME);
    query.delete(EPISODE_PARAMS.PAGE);

    applyFiltersForPage();
  };

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          margin: "3rem 0 5rem 0",
        }}
      >
        Search for watchlist:
      </Typography>
      <FiltersForm>
        <TextField
          label="Watchlist name:"
          value={nameParam}
          placeholder="Type watchlist name"
          onChange={(e) => setNameParam(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <Box sx={{ gap: "1rem", display: "flex" }}>
          <SearchButton handleSearch={handleFilterButton} />
          <ClearButton handleClear={handleClearButton} />
        </Box>
      </FiltersForm>
    </>
  );
};

export default MyWatchListFilter;
