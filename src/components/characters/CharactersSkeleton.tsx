import React from "react";
import { Skeleton } from "@mui/material";
import { SKELETON_SIZE } from "../../config/config";

const CharactersSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: SKELETON_SIZE }, (_, index) => (
        <Skeleton key={index} variant="rounded" width="22rem" height="40rem" />
      ))}
    </>
  );
};

export default CharactersSkeleton;
