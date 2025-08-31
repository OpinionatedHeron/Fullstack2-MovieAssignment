import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import TemplateTvListPage from "../components/templateTVListPage";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { DiscoverTv } from "../types/interfaces";
import { getDiscoverTvPage } from "../api/tmdb-api";
import AddToTvFavouritesIcon from "../components/cardIcons/tvAddToFavourites";

const TvDiscoverPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError, isFetching} = useQuery<DiscoverTv, Error>(
   ["discover-tv", page],
   () => getDiscoverTvPage(page),
   { keepPreviousData: true }
  );

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  const tvShows = data?.results ?? [];
  const total_pages = data?.total_pages ?? 1;

  return (
    <>
      <TemplateTvListPage
        title="Discover TV Shows"
        tvShows={tvShows}
        action={(tv) => <AddToTvFavouritesIcon {...tv} />}
      />
    <Stack spacing={2} sx={{ alignItems: "center", my: 4 }}>
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

export default TvDiscoverPage;
