import React from "react";
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
import { useAppDispatch } from "../../store";
import { LOCATIONS_COLUMN_NAMES } from "../../config/config";
import { useGetLocationsQuery } from "../../store/locations/api";
import { locationsActions } from "../../store/locations/locations";
import LocationsDetailModal from "./LocationsDetailModal";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

type LocationsTableProps = {
  page: string;
  query: URLSearchParams;
  handlePaginationClick: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
};

const LocationsTable: React.FC<LocationsTableProps> = ({
  page,
  query,
  handlePaginationClick,
}) => {
  const dispatch = useAppDispatch();

  const { data } = useGetLocationsQuery(query.toString());

  const handleModalOpen = (urls: string[]) => {
    dispatch(locationsActions.setResidentsUrls(urls));
    dispatch(locationsActions.showModalWindow());
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {LOCATIONS_COLUMN_NAMES.map((column, key) => (
              <TableCell key={key}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.results.map((location) => (
            <TableRow key={location.id}>
              <TableCell>{location.id}</TableCell>
              <TableCell>{location.name}</TableCell>
              <TableCell>{location.type}</TableCell>
              <TableCell>{location.dimension}</TableCell>
              <TableCell>
                <Tooltip title="Show characters in location" arrow>
                  <InfoOutlinedIcon
                    fontSize="large"
                    onClick={() => handleModalOpen(location.residents)}
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
      <LocationsDetailModal />
    </TableContainer>
  );
};

export default LocationsTable;
