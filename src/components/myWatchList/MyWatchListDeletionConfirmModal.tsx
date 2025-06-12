import React from 'react';
import { Box, Button, Modal, styled } from '@mui/material';
import { useTheme } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { watchListsActions } from '../../store/watchList/watchListMultiple';

const ModalContainer = styled(Box)(({ theme }) => ({
  flexDirection: 'column',
  gap: '5rem',
  display: 'flex',
  overflow: 'scroll',
  boxShadow: '1px 8px 8px -5px rgba(66, 68, 90, 1)',
  borderRadius: '5px',
  border: `1px solid ${theme.palette.primary.contrastText}`,
  padding: '4rem',
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.primary.contrastText,
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const MyWatchListDeletionConfirmModal: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const isDeletionModalOpen = useAppSelector(
    (state) => state.watchList.isDeletionModalOpen
  );
  const episodeToDelete = useAppSelector(
    (state) => state.watchList.selectedEpisode
  );

  function handleModalClose() {
    dispatch(watchListsActions.hideDeletionModal());
  }

  function removeEpisodeFromWatchList() {
    if (episodeToDelete) {
      dispatch(watchListsActions.removeEpisodeFromWatchList());
    }

    dispatch(watchListsActions.hideDeletionModal());
  }
  return (
    <Modal open={isDeletionModalOpen} onClose={handleModalClose}>
      <ModalContainer>
        <Box>
          <p>
            Are you sure you want to delete this episode from your watch list?
          </p>
        </Box>
        <Box sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          {episodeToDelete?.name}
        </Box>
        <Box sx={{ gap: '2rem', justifyContent: 'center', display: 'flex' }}>
          <Button
            sx={{
              boxShadow: '1px 8px 8px -5px rgba(66, 68, 90, 1)',
              border: `1px solid ${theme.palette.primary.dark}`,
              backgroundColor: theme.palette.primary.main,
              '&:hover': { backgroundColor: theme.palette.primary.light },
            }}
            onClick={removeEpisodeFromWatchList}
          >
            Yes!
          </Button>
          <Button
            sx={{
              boxShadow: '1px 8px 8px -5px rgba(66, 68, 90, 1)',
              border: `1px solid ${theme.palette.error.dark}`,
              backgroundColor: theme.palette.error.main,
              color: 'white',
              '&:hover': { backgroundColor: theme.palette.error.light },
            }}
            onClick={handleModalClose}
          >
            No!
          </Button>
        </Box>
      </ModalContainer>
    </Modal>
  );
};

export default MyWatchListDeletionConfirmModal;
