import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EPISODE_PARAMS, PAGINATION_DEFAULT_PAGE } from "../../config/config";
import { Box, TextField, Typography } from "@mui/material";
import FiltersForm from "../shared/FiltersForm";
import SearchButton from "../shared/SearchButton";
import ClearButton from "../shared/ClearButton";

type EpisodeFilterProps = {
  query: URLSearchParams;
};

const EpisodesFilter: React.FC<EpisodeFilterProps> = ({ query }) => {
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
      pathname: "/episodes",
      search: query.toString(),
    });
  };

  const handleFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    query.set(EPISODE_PARAMS.PAGE, PAGINATION_DEFAULT_PAGE);

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
        Filter data using these filters:
      </Typography>
      <FiltersForm>
        <TextField
          label="Episode name:"
          value={nameParam}
          placeholder="Type episode name"
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

export default EpisodesFilter;
