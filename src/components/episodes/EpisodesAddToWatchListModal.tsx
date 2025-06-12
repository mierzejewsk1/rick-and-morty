import React from 'react';
import { Box, Container, Modal, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '../../store';
import { watchListsActions } from '../../store/watchList/watchListMultiple';
import { Episode } from '../../types/Episode';

export const EpisodesAddToWatchListModal: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const watchLists = useAppSelector((state) => state.watchList.watchLists);

  const isAddToWatchListModalOpen = useAppSelector(
    (state) => state.watchList.isAddToWatchListModalOpen
  );

  const selectedEpisode = useAppSelector(
    (state) => state.watchList.selectedEpisode
  );

  function handleModalClose() {
    dispatch(watchListsActions.hideAddToWatchListModal());
  }

  const addEpisodeToWatchList = (episode?: Episode, watchListId?: number) => {
    if (!episode || !watchListId) {
      return;
    }

    dispatch(watchListsActions.addEpisodeToWatchList(watchListId));
  };

  const checkIfEpisodeExistInStorage = (
    episode?: Episode,
    watchListId?: number
  ) => {
    if (!episode || !watchListId) {
      return;
    }

    const watchList = watchLists.find(
      (watchList) => watchList.id === watchListId
    );

    if (!watchList) {
      return;
    }

    return watchList.episodes.some((ep) => ep.episodeInfo.id === episode.id);
  };

  const removeEpisodeFromWatchList = (
    episode?: Episode,
    watchListId?: number
  ) => {
    if (!episode || !watchListId) {
      return;
    }

    dispatch(watchListsActions.showDeletionModal(watchListId));
  };

  return (
    <Modal open={isAddToWatchListModalOpen} onClose={handleModalClose}>
      <Container
        sx={{
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
          padding: '0',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.primary.contrastText,
          [theme.breakpoints.up('sm')]: {
            padding: '0',
            width: '50rem',
            height: '70rem',
          },
        }}
      >
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
          <p>Choose the list to add episode</p>
          <Tooltip title='Close details' arrow>
            <CloseIcon
              fontSize='large'
              onClick={handleModalClose}
              cursor='pointer'
            />
          </Tooltip>
        </Box>
        {watchLists.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 4rem',
            }}
          >
            <p>{item.name}</p>
            {checkIfEpisodeExistInStorage(selectedEpisode, item.id) ? (
              <Tooltip title='Remove from watchlist' arrow>
                <RemoveCircleOutlineOutlinedIcon
                  fontSize='large'
                  color='error'
                  onClick={() =>
                    removeEpisodeFromWatchList(selectedEpisode, item.id)
                  }
                  cursor='pointer'
                />
              </Tooltip>
            ) : (
              <Tooltip title='Add to watchlist' arrow>
                <CheckCircleOutlinedIcon
                  fontSize='large'
                  color='success'
                  onClick={() =>
                    addEpisodeToWatchList(selectedEpisode, item.id)
                  }
                  cursor='pointer'
                />
              </Tooltip>
            )}
          </div>
        ))}
      </Container>
    </Modal>
  );
};
