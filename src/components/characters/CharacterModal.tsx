import React from "react";
import { Box, Modal, styled } from "@mui/material";
import { Character } from "../../types/Character";
import { useTheme } from "@mui/material/styles";

const CharacterInfo = styled(Box)(() => ({
  flexDirection: "column",
  display: "flex",
  width: "100%",
  padding: "1rem 3rem",
}));

const CharacterName = styled(Box)(() => ({
  alignSelf: "center",
  marginBottom: "1rem",
  fontStyle: "italic",
  fontSize: "2.5rem",
}));

const CharacterAttribute = styled(Box)(() => ({
  justifyContent: "space-between",
  display: "flex",
}));

const ModalBox = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  boxShadow: "1px 8px 8px -5px rgba(66, 68, 90, 1)",
  outline: "none",
  backgroundColor: theme.palette.secondary.light,
  borderRadius: "5px",
  border: "1px solid",
  borderColor: theme.palette.primary.contrastText,
  width: "40rem",
  fontSize: "1.5rem",
  color: theme.palette.primary.contrastText,
}));

type CharacterModalProps = {
  isOpen: boolean;
  onClose: (character: Character | null) => void;
  character: Character;
};

const CharacterModal: React.FC<CharacterModalProps> = ({
  isOpen,
  onClose,
  character,
}) => {
  const theme = useTheme();

  return (
    <Modal open={isOpen} onClose={() => onClose(null)}>
      <ModalBox>
        <img
          src={character.image}
          style={{
            aspectRatio: "1",
            width: "100%",
            borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
          }}
        />
        <CharacterInfo>
          <CharacterName>{character.name}</CharacterName>
          <CharacterAttribute>
            <p>Species:</p>
            <p>{character.species}</p>
          </CharacterAttribute>
          <CharacterAttribute>
            <p>Status:</p>
            <p>{character.status}</p>
          </CharacterAttribute>
          <CharacterAttribute>
            <p>Gender:</p>
            <p>{character.gender}</p>
          </CharacterAttribute>
          <CharacterAttribute>
            <p>Type:</p>
            <p>{character.type || "-"}</p>
          </CharacterAttribute>
          <CharacterAttribute>
            <p>Origin:</p>
            <p>{character.origin.name}</p>
          </CharacterAttribute>
          <CharacterAttribute>
            <p>Location:</p>
            <p>{character.location.name}</p>
          </CharacterAttribute>
        </CharacterInfo>
      </ModalBox>
    </Modal>
  );
};

export default CharacterModal;
