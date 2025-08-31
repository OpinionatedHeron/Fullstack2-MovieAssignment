import React, {useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import TemplateTvListPage from "../components/templateTVListPage";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { DiscoverTv } from "../types/interfaces";
import { getTopRatedTvPage} from "../api/tmdb-api";
import AddToTvFavouritesIcon from "../components/cardIcons/tvAddToFavourites";

const TopRatedTVPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isError, isFetching } = useQuery<DiscoverTv, Error>(
    ["top-rated-tv", page],
    () => getTopRatedTvPage(page),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const tvShows = data?.results ?? [];
  const total_pages = data?.total_pages ?? 1;

  return (
    <>
      <TemplateTvListPage title="Top Rated TV Shows" tvShows={tvShows} action={(tv) => <AddToTvFavouritesIcon tv={tv} />}/>
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

export default TopRatedTVPage;
