import React from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { LOCAL_EPISODES_COLUMN_NAMES } from "../../config/config";
import CloseIcon from "@mui/icons-material/Close";
import { EpisodeLocal } from "../../types/EpisodeLocal";
import { watchListsActions } from "../../store/watchList/watchListMultiple";
import { useAppDispatch } from "../../store";
import { WatchListLocal } from "../../store/watchList/types";
import { useTheme } from "@mui/material";

interface MyWatchListTablesProps {
  item: WatchListLocal;
}

const MyWatchListTables: React.FC<MyWatchListTablesProps> = ({ item }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const removeEpisodeFromWatchList = (
    episode: EpisodeLocal,
    watchListId: number
  ) => {
    if (!episode || !watchListId) {
      return;
    }

    dispatch(watchListsActions.setSelectedEpisode(episode.episodeInfo));
    dispatch(watchListsActions.showDeletionModal(watchListId));
  };

  const handleCheckboxChange = (episode: EpisodeLocal, watchListId: number) => {
    if (!episode || !watchListId) {
      return;
    }

    dispatch(watchListsActions.toggleCompletionStatus([episode, watchListId]));
  };

  return (
    <TableContainer sx={{ marginBottom: "5rem" }}>
      {item.episodes.length !== 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              {LOCAL_EPISODES_COLUMN_NAMES.map((column, key) => (
                <TableCell key={key}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {item.episodes.map((episode) => (
              <TableRow key={episode.episodeInfo.id}>
                <TableCell>{episode.episodeInfo.id}</TableCell>
                <TableCell>{episode.episodeInfo.name}</TableCell>
                <TableCell>{episode.episodeInfo.air_date}</TableCell>
                <TableCell>{episode.episodeInfo.episode}</TableCell>
                <TableCell>
                  <Tooltip title="Remove from watchlist" arrow>
                    <CloseIcon
                      fontSize="large"
                      color="error"
                      onClick={() =>
                        removeEpisodeFromWatchList(episode, item.id)
                      }
                      cursor="pointer"
                    />
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Tooltip title="Mark as completed / uncompleted" arrow>
                    <Checkbox
                      checked={episode.completed && true}
                      onChange={() => handleCheckboxChange(episode, item.id)}
                    />
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              textAlign: "center",
              padding: "2rem",
              width: "100%",
              color: theme.palette.primary.contrastText,
            }}
          >
            You did not add anything to this list 👀
          </p>
        </div>
      )}
    </TableContainer>
  );
};

export default MyWatchListTables;
