import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Character } from "../../types/Character";
import { Box, styled } from "@mui/material";

const ResidentBox = styled(Box)(() => ({
  alignItems: "center",
  gap: "2rem",
  display: "flex",
  marginBottom: "2rem",
}));

const residentAvatar = {
  borderRadius: "100px",
  border: "1px solid black",
  width: "7rem",
  height: "7rem",
};

type LocationsResidentDataProps = {
  url: string;
};

const LocationsResidentData: React.FC<LocationsResidentDataProps> = ({
  url,
}) => {
  const resident = useFetch<Character>(url);

  return (
    <ResidentBox>
      <img src={resident.data?.image} style={residentAvatar} />
      <p>
        {resident.data?.name} &#40;{resident.data?.species}&#41;
      </p>
    </ResidentBox>
  );
};

export default LocationsResidentData;
