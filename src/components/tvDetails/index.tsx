import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { TvDetailsProps } from "../../types/interfaces";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const TvDetails: React.FC<TvDetailsProps> = (tv) => {
    const minutes = tv.episode_run_time[0];

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tv.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {tv.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip
          icon={<StarRate />}
          label={`${tv.vote_average} (${tv.vote_count}`}
        />
        <Chip label={`First Aired: ${tv.first_air_date}`} />
        </Paper>
        <Paper component="ul" sx={styles.chipSet}>
          <Chip label={`Status: ${tv.status}`} />
        </Paper>
        <Paper component="ul" sx={styles.chipSet}>
        <Chip label={`Seasons: ${tv.number_of_seasons}`} />
        <Chip label={`Episodes: ${tv.number_of_episodes}`} />
      </Paper>
    </>
  );
};
export default TvDetails;
