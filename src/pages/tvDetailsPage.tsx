import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import TemplateTvPage from "../components/templateTvPage";
import { getTv } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { TvDetailsProps } from "../types/interfaces";

const TvDetailsPage: React.FC = () => {
  const { id } = useParams();
  const {
    data: tv,
    error,
    isLoading,
    isError,
  } = useQuery<TvDetailsProps, Error>(["tv", id], () =>
    getTv(id || "")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <TemplateTvPage tv={tv}>
            <TvDetails {...tv} />
          </TemplateTvPage>
        </>
      ) : (
        <p>Waiting for TV details</p>
      )}
    </>
  );
};

export default TvDetailsPage;
