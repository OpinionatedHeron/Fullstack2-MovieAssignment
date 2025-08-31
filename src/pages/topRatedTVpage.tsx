import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import TemplateTvListPage from "../components/templateTVListPage";
import { BaseTvProps } from "../types/interfaces";
import { getTopRatedTvShows } from "../api/tmdb-api";

const TopRatedTVPage: React.FC = () => {
  const { data, isLoading, error, isError } = useQuery<BaseTvProps[], Error>(
    "topRatedTV",
    getTopRatedTvShows
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const tvShows = data ?? [];

  return <TemplateTvListPage title="Top Rated TV Shows" tvShows={tvShows} />;
};

export default TopRatedTVPage;
