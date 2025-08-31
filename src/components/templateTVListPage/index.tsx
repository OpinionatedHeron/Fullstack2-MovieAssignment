import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../headerMovieList"; // Applying DRY Principle and using what already exists
import TvList from "../tvList";
import { BaseTvProps } from "../../types/interfaces";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridListTile: {
    width: 450,
    height: "100vh",
  },
};

interface TemplateTvListPageProps {
  title: string;
  tvShows: BaseTvProps[];
}

const TemplateTvListPage: React.FC<TemplateTvListPageProps> = ({ title, tvShows }) => {
  return (
    <Grid container spacing={2} sx={styles.gridListRoot}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item xs={12}>
        <TvList tvShows={tvShows} />
      </Grid>
    </Grid>
  );
};

export default TemplateTvListPage;
