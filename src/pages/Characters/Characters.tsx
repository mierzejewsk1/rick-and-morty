import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_URL, CHARACTER_PARAMS } from "../../config/config";
import { Character, ApiResponse } from "../../types/Character";
import { Box, Container, Pagination, styled, Typography } from "@mui/material";
import CharacterCard from "../../components/characters/CharacterCard";
import CharacterModal from "../../components/characters/CharacterModal";
import PaginationItem from "@mui/material/PaginationItem";
import FilterError from "../../components/shared/FilterError";
import CharactersSkeleton from "../../components/characters/CharactersSkeleton";
import CharacterFilters from "../../components/characters/CharacterFilters";
import { useTheme } from "@mui/material";

const CharactersContainer = styled(Box)(() => ({
  gridTemplateColumns: "repeat(auto-fit, 22rem)",
  gap: "1.2rem",
  alignItems: "center",
  justifyContent: "center",
  display: "grid",
}));

const paginationStyles = {
  justifySelf: "center",
  margin: "5rem 0",
  "& .MuiPaginationItem-root": {
    fontSize: "1.5rem",
  },
};

const Characters: React.FC = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [openedCharacter, setOpenedCharacter] = useState<Character | null>(
    null
  );

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = query.get(CHARACTER_PARAMS.PAGE) || "1";

  const { isFetching, error, data } = useFetch<ApiResponse<Character>>(
    `${API_URL}/character/?${query.toString()}`
  );

  const handleModal = (character: Character | null) => {
    setOpenedCharacter(character);
    setIsModalOpen(!isModalOpen);
  };

  const handlePaginationScrollUp = () => {
    const container = document.getElementById("container");

    container?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Container maxWidth="lg" id="container">
      <Typography
        variant="h1"
        sx={{
          marginBottom: "3rem",
        }}
      >
        Characters
      </Typography>
      <CharacterFilters query={query} />
      <CharactersContainer maxWidth="lg">
        {!isFetching &&
          !error &&
          data?.results?.map((character) => {
            return (
              <CharacterCard
                handleOpen={handleModal}
                characterData={character}
                key={character.id}
              />
            );
          })}
        {isFetching && <CharactersSkeleton />}
        {error && <FilterError />}
      </CharactersContainer>
      {!error && (
        <Pagination
          count={data?.info?.pages || 1}
          onClick={handlePaginationScrollUp}
          color="primary"
          size="large"
          sx={paginationStyles}
          page={parseInt(page, 10)}
          renderItem={(item) => {
            const currentPage = item.page ? item.page.toString() : "1";
            const updatedParams = new URLSearchParams(query);
            updatedParams.set("page", currentPage);

            return (
              <PaginationItem
                sx={{ color: theme.palette.primary.contrastText }}
                component={Link}
                to={`/characters?${updatedParams.toString()}`}
                {...item}
              />
            );
          }}
        />
      )}
      {openedCharacter && (
        <CharacterModal
          isOpen={isModalOpen}
          onClose={handleModal}
          character={openedCharacter}
        />
      )}
    </Container>
  );
};

export default Characters;
