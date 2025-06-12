import React from "react";
import { EPISODE_COLUMN_NAMES } from "../../config/config";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import EpisodesDetailModal from "./EpisodesDetailModal";
import { useAppDispatch } from "../../store";
import { episodesActions } from "../../store/episodes/episodes";
import { useGetEpisodesQuery } from "../../store/episodes/api";
import { watchListsActions } from "../../store/watchList/watchListMultiple";
import { Episode } from "../../types/Episode";
import MyWatchListDeletionConfirmModal from "../myWatchList/MyWatchListDeletionConfirmModal";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddIcon from "@mui/icons-material/Add";
import { EpisodesAddToWatchListModal } from "./EpisodesAddToWatchListModal";

type EpisodesTableProps = {
  page: string;
  query: URLSearchParams;
  handlePaginationClick: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
};

const EpisodesTable: React.FC<EpisodesTableProps> = ({
  page,
  query,
  handlePaginationClick,
}) => {
  const dispatch = useAppDispatch();
  const { data } = useGetEpisodesQuery(query.toString());

  const handleAddToWatchListButtonClick = (episode: Episode) => {
    dispatch(watchListsActions.showAddToWatchListModal(episode));
  };

  const handleModalOpen = (urls: string[]) => {
    dispatch(episodesActions.setCharactersUrls(urls));
    dispatch(episodesActions.showModalWindow());
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {EPISODE_COLUMN_NAMES.map((column, key) => (
              <TableCell key={key}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.results.map((episode) => (
            <TableRow key={episode.id}>
              <TableCell>{episode.id}</TableCell>
              <TableCell>{episode.name}</TableCell>
              <TableCell>{episode.air_date}</TableCell>
              <TableCell>{episode.episode}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Tooltip title="Show characters in episode" arrow>
                  <InfoOutlinedIcon
                    fontSize="large"
                    onClick={() => handleModalOpen(episode.characters)}
                    cursor="pointer"
                  />
                </Tooltip>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Tooltip title="Add to watchlist" arrow>
                  <AddIcon
                    fontSize="large"
                    onClick={() => handleAddToWatchListButtonClick(episode)}
                    cursor="pointer"
                  />
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        rowsPerPageOptions={[]}
        count={data?.info.count || 0}
        rowsPerPage={20}
        page={parseInt(page, 10) - 1}
        onPageChange={handlePaginationClick}
      />
      <EpisodesDetailModal />
      <MyWatchListDeletionConfirmModal />
      <EpisodesAddToWatchListModal />
    </TableContainer>
  );
};

export default EpisodesTable;
