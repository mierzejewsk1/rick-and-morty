import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LOCATIONS_PARAMS, PAGINATION_DEFAULT_PAGE } from "../../config/config";
import FiltersForm from "../shared/FiltersForm";
import SearchButton from "../shared/SearchButton";
import ClearButton from "../shared/ClearButton";

type LocationsFilterProps = {
  query: URLSearchParams;
};

const LocationsFilter: React.FC<LocationsFilterProps> = ({ query }) => {
  const navigate = useNavigate();

  const name = query.get(LOCATIONS_PARAMS.NAME) || "";
  const type = query.get(LOCATIONS_PARAMS.TYPE) || "";
  const dimension = query.get(LOCATIONS_PARAMS.DIMENSION) || "";

  const [nameParam, setNameParam] = useState<string>(name);
  const [typeParam, setTypeParam] = useState<string>(type);
  const [dimensionParam, setDimensionParam] = useState<string>(dimension);

  const setSearchingParam = (name: LOCATIONS_PARAMS, value: string) => {
    const isFilterDefault = !value;

    if (isFilterDefault) {
      query.delete(name);
    } else {
      query.set(name, value);
    }
  };

  const applyFiltersForPage = () => {
    navigate({
      pathname: "/locations",
      search: query.toString(),
    });
  };

  const handleFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    query.set(LOCATIONS_PARAMS.PAGE, PAGINATION_DEFAULT_PAGE);

    setSearchingParam(LOCATIONS_PARAMS.NAME, nameParam);
    setSearchingParam(LOCATIONS_PARAMS.TYPE, typeParam);
    setSearchingParam(LOCATIONS_PARAMS.DIMENSION, dimensionParam);

    applyFiltersForPage();
  };

  const handleClearButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setNameParam("");
    setTypeParam("");
    setDimensionParam("");

    query.delete(LOCATIONS_PARAMS.PAGE);
    query.delete(LOCATIONS_PARAMS.NAME);
    query.delete(LOCATIONS_PARAMS.TYPE);
    query.delete(LOCATIONS_PARAMS.DIMENSION);

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
          label="Location name:"
          value={nameParam}
          placeholder="Type location name"
          onChange={(e) => setNameParam(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          label="Type name:"
          value={typeParam}
          placeholder="Type type name"
          onChange={(e) => setTypeParam(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          label="Dimension name:"
          value={dimensionParam}
          placeholder="Type dimension name"
          onChange={(e) => setDimensionParam(e.target.value)}
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

export default LocationsFilter;
