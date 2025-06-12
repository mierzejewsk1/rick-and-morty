import React from "react";
import { Box, Paper, styled } from "@mui/material";
import { Character } from "../../types/Character";
import { useTheme } from "@mui/material/styles";
import CharacterStatus from "./CharacterStatus";

const Card = styled(Paper)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "column",
  gap: "0.5rem",
  display: "flex",
  overflow: "hidden",
  transition: "all 0.2s ease-in",
  boxShadow: "1px 8px 8px -5px rgba(66, 68, 90, 1)",
  border: "1px solid",
  borderColor: theme.palette.primary.contrastText,
  height: "40rem",
  fontSize: "1.5rem",
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    transform: "translateY(-2px)",
    backgroundColor: theme.palette.primary.main,
    cursor: "pointer",
  },
}));

const CharacterInfo = styled(Box)(() => ({
  flexDirection: "column",
  display: "flex",
  width: "100%",
  padding: "1rem 2rem",
}));

const CharacterName = styled(Box)(({ theme }) => ({
  position: "relative",
  alignSelf: "center",
  overflow: "hidden",
  marginBottom: "1rem",
  width: "100%",
  fontStyle: "italic",
  fontSize: "2rem",
  textAlign: "center",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",

  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "1px",
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

const CharacterAttribute = styled(Box)(() => ({
  justifyContent: "center",
  textAlign: "center",
  display: "flex",
  fontSize: "1.4rem",
}));

const ImageBox = styled(Box)(() => ({
  aspectRatio: "1",
  width: "100%",
  position: "relative",
}));

type CharacterCardProps = {
  handleOpen: (character: Character) => void;
  characterData: Character;
};

const CharacterCard: React.FC<CharacterCardProps> = ({
  handleOpen,
  characterData,
}) => {
  const theme = useTheme();

  return (
    <Card onClick={() => handleOpen(characterData)}>
      <ImageBox>
        <CharacterStatus status={characterData.status} />
        <img
          style={{
            aspectRatio: "1",
            width: "100%",
            borderBottom: "1px solid",
            borderColor: theme.palette.primary.contrastText,
          }}
          src={characterData.image}
        />
      </ImageBox>
      <CharacterInfo>
        <CharacterName>{characterData.name}</CharacterName>
        <CharacterAttribute>
          <p>{characterData.species}</p>
        </CharacterAttribute>
        <CharacterAttribute>
          <p>{characterData.gender}</p>
        </CharacterAttribute>
        <CharacterAttribute>
          <p>{characterData.origin.name}</p>
        </CharacterAttribute>
      </CharacterInfo>
    </Card>
  );
};

export default CharacterCard;
