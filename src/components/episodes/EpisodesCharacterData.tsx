import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Character } from "../../types/Character";
import { Box, styled } from "@mui/material";

const CharacterBox = styled(Box)(() => ({
  alignItems: "center",
  gap: "2rem",
  display: "flex",
  marginBottom: "2rem",
}));

const characterAvatar = {
  borderRadius: "100px",
  border: "1px solid black",
  width: "7rem",
  height: "7rem",
};

type EpisodesCharacterDataProps = {
  url: string;
};

const EpisodesCharacterData: React.FC<EpisodesCharacterDataProps> = ({
  url,
}) => {
  const character = useFetch<Character>(url);

  return (
    <CharacterBox>
      <img src={character.data?.image} style={characterAvatar} />
      <p>
        {character.data?.name} &#40;{character.data?.species}&#41;
      </p>
    </CharacterBox>
  );
};

export default EpisodesCharacterData;
