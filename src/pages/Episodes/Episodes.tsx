import React from "react";
import { Container, Typography } from "@mui/material";
import { EPISODE_PARAMS } from "../../config/config";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetEpisodesQuery } from "../../store/episodes/api";
import EpisodesTable from "../../components/episodes/EpisodesTable";
import EpisodesFilter from "../../components/episodes/EpisodesFilter";
import EpisodesSkeleton from "../../components/episodes/EpisodesSkeleton";
import FilterError from "../../components/shared/FilterError";

const Episodes: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const page = query.get(EPISODE_PARAMS.PAGE) || "1";

  const { error, isLoading } = useGetEpisodesQuery(query.toString());

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

    query.set(EPISODE_PARAMS.PAGE, (newPage + 1).toString());

    navigate({
      pathname: "/episodes",
      search: query.toString(),
    });
  };

  return (
    <Container maxWidth="lg" id="container">
      <Typography variant="h1">Episodes</Typography>
      <EpisodesFilter query={query} />
      {!error && !isLoading && (
        <EpisodesTable
          query={query}
          page={page}
          handlePaginationClick={handlePaginationClick}
        />
      )}
      {isLoading && <EpisodesSkeleton />}
      {error && <FilterError />}
    </Container>
  );
};

export default Episodes;
