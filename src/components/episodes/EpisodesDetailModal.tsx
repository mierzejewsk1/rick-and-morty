import { Box, Modal, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import EpisodesCharacterData from './EpisodesCharacterData';
import { useAppDispatch, useAppSelector } from '../../store';
import { episodesActions } from '../../store/episodes/episodes';
import ModalError from '../shared/ModalError';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material';

const ModalContainer = styled(Box)(({ theme }) => ({
  flexDirection: 'column',
  gap: '5rem',
  display: 'flex',
  overflow: 'scroll',
  boxShadow: '1px 8px 8px -5px rgba(66, 68, 90, 1)',
  outline: 'none',
  borderRadius: '5px',
  border: `1px solid ${theme.palette.primary.contrastText}`,
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.primary.contrastText,
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    width: '50rem',
    height: '70rem',
  },
}));

const EpisodesDetailModal: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const isModalOpen = useAppSelector((state) => state.episodes.isModalOpen);
  const charactersUrls = useAppSelector(
    (state) => state.episodes.charactersUrls
  );

  function handleModalClose() {
    dispatch(episodesActions.hideModalWindow());
  }

  return (
    <Modal open={isModalOpen} onClose={handleModalClose}>
      <ModalContainer>
        <Box
          sx={{
            top: '0',
            position: 'sticky',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            borderBottom: `1px solid ${theme.palette.secondary.dark}`,
            padding: '2rem 4rem',
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <p>Characters</p>
          <Tooltip title='Close details' arrow>
            <CloseIcon
              fontSize='large'
              onClick={handleModalClose}
              cursor='pointer'
            />
          </Tooltip>
        </Box>
        <Box sx={{ padding: '0 4rem' }}>
          {charactersUrls?.length !== 0 &&
            charactersUrls?.map((characterUrl, key) => (
              <EpisodesCharacterData url={characterUrl} key={key} />
            ))}
          {charactersUrls?.length === 0 && (
            <ModalError label={'There are no characters for this episode'} />
          )}
        </Box>
      </ModalContainer>
    </Modal>
  );
};

export default EpisodesDetailModal;
