import React, { useContext } from "react";
import { useQueries } from "react-query";
import Spinner from "../components/spinner";
import { MoviesContext } from "../contexts/moviesContext";
import { getTv } from "../api/tmdb-api";
import RemoveFromTvFavouritesIcon from "../components/cardIcons/tvRemoveFromFavourites";
import TemplateTvListPage from "../components/templateTVListPage";
import { BaseTvProps } from "../types/interfaces";

const FavouriteTvPage: React.FC = () => {
  const { tvFavourites } = useContext(MoviesContext);

  const tvQueries = useQueries(
    tvFavourites.map((tvId) => ({
      queryKey: ["tv", tvId],
      queryFn: () => getTv(tvId.toString()),
    }))
  );

  const isLoading = tvQueries.some((q) => q.isLoading);
  if (isLoading) return <Spinner />;

  const tvShows = tvQueries.map((q) => q.data).filter(Boolean) as BaseTvProps[];

  return (
    <TemplateTvListPage
      title="Favourite TV Shows"
      tvShows={tvShows}
      action={(tv: BaseTvProps) => <RemoveFromTvFavouritesIcon {...tv} />}
    />
  );
};

export default FavouriteTvPage;