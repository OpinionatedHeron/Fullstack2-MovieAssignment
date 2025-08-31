import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import TemplateTvListPage from "../components/templateTVListPage";
import { BaseTvProps } from "../types/interfaces";
import { getTVShows } from "../api/tmdb-api";
import AddToTvFavouritesIcon from "../components/cardIcons/tvAddToFavourites";

const TvDiscoverPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<BaseTvProps[], Error>(
    "tvShows",
    getTVShows
  );

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  const tvShows = data ?? [];

  return (
    <TemplateTvListPage
      title="Discover TV Shows"
      tvShows={tvShows}
      action={(tv: BaseTvProps) => <AddToTvFavouritesIcon {...tv} />}
    />
  );
};

export default TvDiscoverPage;
