import React from "react";
import { LOCATIONS_SKELETON_SIZE } from "../../config/config";
import { Skeleton } from "@mui/material";

const LocationsSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: LOCATIONS_SKELETON_SIZE }, (_, index) => (
        <Skeleton key={index} variant="rounded" width="100%" height="70rem" />
      ))}
    </>
  );
};

export default LocationsSkeleton;
