import React, { useState, useCallback } from "react";
import { BaseMovieProps, BaseTvProps, Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  addToFavourites: (movie: BaseMovieProps) => void;
  removeFromFavourites: (movie: BaseMovieProps) => void;
  addReview: (movie: BaseMovieProps, review: Review) => void;

  mustWatch: number[];
  addToMustWatch: (movie: BaseMovieProps) => void;

  // Adding TV Favourites
  tvFavourites: number[];
  addToTvFavourites: (tvShow: BaseTvProps) => void;
  removeFromTvFavourites: (tvShow: BaseTvProps) => void;
}
const initialContextState: MovieContextInterface = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  addReview: (movie, review) => {
    movie.id, review;
  },
  mustWatch: [],
  addToMustWatch: () => {},
  tvFavourites: [],
  addToTvFavourites: () => {},
  removeFromTvFavourites: () => {},
};

export const MoviesContext =
  React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [myReviews, setMyReviews] = useState<Review[]>([]);
  const [favourites, setFavourites] = useState<number[]>([]);
  const [mustWatch, setMustWatch] = useState<number[]>([]);
  const [tvFavourites, setTvFavourites] = useState<number[]>([]);

  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(movie.id)) {
        return [...prevFavourites, movie.id];
      }
      return prevFavourites;
    });
  }, []);

  const addToMustWatch = useCallback((movie: BaseMovieProps) => {
    setMustWatch((prevMustWatch) => {
      if (prevMustWatch.includes(movie.id)) {
        return prevMustWatch;
      }
      const updated = [...prevMustWatch, movie.id];
      console.log("mustWatch:", updated);
      return updated;
    });
  }, []);

  const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((mId) => mId !== movie.id)
    );
  }, []);

  const addReview = (movie: BaseMovieProps, review: Review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const addToTvFavourites = useCallback((tvShow: BaseTvProps) => {
    setTvFavourites((prevTvFavourites) => {
      if (!prevTvFavourites.includes(tvShow.id)) {
        return [...prevTvFavourites, tvShow.id];
      }
      return prevTvFavourites;
    });
  }, []);

  const removeFromTvFavourites = useCallback((tvShow: BaseTvProps) => {
    setTvFavourites((prevTvFavourites) =>
      prevTvFavourites.filter((tId) => tId !== tvShow.id)
    );
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatch,
        addToMustWatch,
        tvFavourites,
        addToTvFavourites,
        removeFromTvFavourites,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
