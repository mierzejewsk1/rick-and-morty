import React from "react";
import { Skeleton } from "@mui/material";

const EPISODE_SKELETON_LENGTH = 1;

const EpisodesSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: EPISODE_SKELETON_LENGTH }, (_, index) => (
        <Skeleton key={index} variant="rounded" width="100%" height="70rem" />
      ))}
    </>
  );
};

export default EpisodesSkeleton;
