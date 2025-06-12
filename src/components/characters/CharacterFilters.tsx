import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CHARACTER_GENDER,
  CHARACTER_PARAMS,
  CHARACTER_STATUS,
  SELECT_MENU_DEFAULT_VALUE,
  PAGINATION_DEFAULT_PAGE,
} from "../../config/config";
import { Box, MenuItem, TextField, Typography } from "@mui/material";
import FiltersForm from "../shared/FiltersForm";
import SearchButton from "../shared/SearchButton";
import ClearButton from "../shared/ClearButton";

type CharacterFilterProps = {
  query: URLSearchParams;
};

const CharacterFilter: React.FC<CharacterFilterProps> = ({ query }) => {
  const navigate = useNavigate();

  const species = query.get(CHARACTER_PARAMS.SPECIES) || "";
  const status = query.get(CHARACTER_PARAMS.STATUS) || "";
  const gender = query.get(CHARACTER_PARAMS.GENDER) || "";

  const [speciesParam, setSpeciesParam] = useState<string>(species);
  const [statusParam, setStatusParam] = useState<string>(status);
  const [genderParam, setGenderParam] = useState<string>(gender);

  const setSearchingParam = (name: CHARACTER_PARAMS, value: string) => {
    const isFilterDefault = value === SELECT_MENU_DEFAULT_VALUE || !value;

    if (isFilterDefault) {
      query.delete(name);
    } else {
      query.set(name, value);
    }
  };

  const applyFiltersForPage = () => {
    navigate({
      pathname: "/characters",
      search: query.toString(),
    });
  };

  const handleFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    query.set(CHARACTER_PARAMS.PAGE, PAGINATION_DEFAULT_PAGE);

    setSearchingParam(CHARACTER_PARAMS.SPECIES, speciesParam);
    setSearchingParam(CHARACTER_PARAMS.STATUS, statusParam);
    setSearchingParam(CHARACTER_PARAMS.GENDER, genderParam);

    applyFiltersForPage();
  };

  const handleClearButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setSpeciesParam("");
    setStatusParam("");
    setGenderParam("");

    query.delete(CHARACTER_PARAMS.PAGE);
    query.delete(CHARACTER_PARAMS.SPECIES);
    query.delete(CHARACTER_PARAMS.STATUS);
    query.delete(CHARACTER_PARAMS.GENDER);

    applyFiltersForPage();
  };

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          marginBottom: "5rem",
        }}
      >
        Filter data using these filters:
      </Typography>
      <FiltersForm>
        <TextField
          label="Character species:"
          value={speciesParam}
          placeholder="Type species:"
          onChange={(e) => setSpeciesParam(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          select
          label="Select status:"
          onChange={(e) => setStatusParam(e.target.value)}
          value={statusParam || SELECT_MENU_DEFAULT_VALUE}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        >
          {CHARACTER_STATUS.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ fontSize: "1.4rem" }}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Select gender:"
          onChange={(e) => setGenderParam(e.target.value)}
          value={genderParam || SELECT_MENU_DEFAULT_VALUE}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        >
          {CHARACTER_GENDER.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ fontSize: "1.4rem" }}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ gap: "1rem", display: "flex" }}>
          <SearchButton handleSearch={handleFilterButton} />
          <ClearButton handleClear={handleClearButton} />
        </Box>
      </FiltersForm>
    </>
  );
};

export default CharacterFilter;
