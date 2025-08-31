import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces";
import { getUpcomingMoviesPage } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const UpcomingMoviesPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError, isFetching } = useQuery<DiscoverMovies, Error>(
    ["upcoming-movies", page],
    () => getUpcomingMoviesPage(page),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data?.results ?? [];
  const total_pages = data?.total_pages ?? 1;

  return (
    <>
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie: BaseMovieProps) => <AddToPlaylistIcon{...movie} />}
    />
    <Stack alignItems="center" sx={{ my: 2 }}>
      <Pagination
        count={total_pages}
        page={page}
        onChange={(_, value) => setPage(value)}
        color="primary"
      />
    </Stack>
    {isFetching ? <Spinner /> : null}
    </>
  );
};
export default UpcomingMoviesPage;
