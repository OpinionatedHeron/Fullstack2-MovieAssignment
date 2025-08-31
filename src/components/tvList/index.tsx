import React from "react";
import Grid from "@mui/material/Grid";
import TvCard from "../tvCard";
import { BaseTvProps } from "../../types/interfaces";

interface TvListProps {
  tvShows: BaseTvProps[];
}

const TvList: React.FC<TvListProps> = ({ tvShows = [] }) => {
  return (
    <Grid container spacing={2}>
      {tvShows.map( tv => (
        <Grid item key={tv.id} xs={12} sm={6} md={4}>
          <TvCard tv={tv} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TvList;
