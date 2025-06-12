import { Container, Typography } from "@mui/material";
import React from "react";
import FilterError from "../../components/shared/FilterError";
import LocationsSkeleton from "../../components/locations/LocationsSkeleton";
import LocationsFilter from "../../components/locations/LocationsFilter";
import LocationsTable from "../../components/locations/LocationsTable";
import { useLocation, useNavigate } from "react-router-dom";
import { LOCATIONS_PARAMS } from "../../config/config";
import { useGetLocationsQuery } from "../../store/locations/api";

const Locations: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const page = query.get(LOCATIONS_PARAMS.PAGE) || "1";

  const { error, isLoading } = useGetLocationsQuery(query.toString());

  const pageScrollup = () => {
    const container = document.getElementById("container");

    container?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handlePaginationClick = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    event?.preventDefault();

    pageScrollup();

    query.set(LOCATIONS_PARAMS.PAGE, (newPage + 1).toString());

    navigate({
      pathname: "/locations",
      search: query.toString(),
    });
  };
  return (
    <Container maxWidth="lg" id="container">
      <Typography variant="h1">Locations</Typography>
      <LocationsFilter query={query} />
      {!error && !isLoading && (
        <LocationsTable
          query={query}
          page={page}
          handlePaginationClick={handlePaginationClick}
        />
      )}
      {isLoading && <LocationsSkeleton />}
      {error && <FilterError />}
    </Container>
  );
};

export default Locations;
