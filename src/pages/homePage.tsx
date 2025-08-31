import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { getDiscoverMoviesPage } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import { DiscoverMovies, BaseMovieProps } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);

  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
  ]);

  const { data, error, isLoading, isError, isFetching } = useQuery<DiscoverMovies, Error>(
    ["discover-movies", page, filterValues],
    () => getDiscoverMoviesPage(page),
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

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
    setPage(1);
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);
  const total_pages = data?.total_pages ?? 1;

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => {
          return <AddToFavouritesIcon {...movie} />;
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
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
export default HomePage;
