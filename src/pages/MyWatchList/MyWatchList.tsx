import React, { useState } from "react";
import { Container, Tooltip, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import MyWatchListFilter from "../../components/myWatchList/MyWatchListFilter";
import { useAppSelector } from "../../store";
import MyWatchListDeletionConfirmModal from "../../components/myWatchList/MyWatchListDeletionConfirmModal";
import ModalError from "../../components/shared/ModalError";
import MyWatchListTables from "../../components/myWatchList/MyWatchListTables";
import { EPISODE_PARAMS } from "../../config/config";
import CloseIcon from "@mui/icons-material/Close";
import DeleteWatchListModal from "../../components/myWatchList/DeleteWatchListModal";
import { useTheme } from "@mui/material";

const MyWatchList: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const watchListName = query.get(EPISODE_PARAMS.NAME) || "";

  const [isWatchListDeleteModalOpen, setIsWatchListDeleteModalOpen] =
    useState<boolean>(false);
  const [selectedWatchListId, setSelectedWatchListId] = useState<number>(0);

  const watchLists = useAppSelector((state) => state.watchList.watchLists);

  const removeWatchList = (watchListId: number) => {
    if (!watchListId) {
      return;
    }

    setSelectedWatchListId(watchListId);
    setIsWatchListDeleteModalOpen(true);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">My watch list</Typography>
      <MyWatchListFilter query={query} />
      {watchLists?.length === 0 ? (
        <ModalError label="You did not add any watchlist" />
      ) : (
        watchLists
          .filter((el) => el.name.includes(watchListName))
          .map((item) => (
            <div key={item.id}>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "2rem",
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  {item.name}
                </p>
                <Tooltip title="Remove watchlist" arrow>
                  <CloseIcon
                    fontSize="large"
                    color="error"
                    onClick={() => removeWatchList(item.id)}
                    cursor="pointer"
                  />
                </Tooltip>
              </div>
              <MyWatchListTables item={item} />
            </div>
          ))
      )}
      <MyWatchListDeletionConfirmModal />
      <DeleteWatchListModal
        watchListId={selectedWatchListId}
        isWatchListDeleteModalOpen={isWatchListDeleteModalOpen}
        closeWatchListDeleteModal={() => setIsWatchListDeleteModalOpen(false)}
      />
    </Container>
  );
};

export default MyWatchList;
