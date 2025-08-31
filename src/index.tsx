import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMovies";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TvDiscoverPage from "./pages/tvDiscoverPage";
import TvDetailsPage from "./pages/tvDetailsPage";
import TopRatedTVPage from "./pages/topRatedTVpage";
import FavouriteTvPage from "./pages/favouriteTv";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route
              path="/movies/favourites"
              element={<FavouriteMoviesPage />}
            />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />

            {/* TV Routes */}
            <Route path="/tv/discover" element={<TvDiscoverPage  />} />
            <Route path="/tv/:id" element={<TvDetailsPage />} />
            <Route path="/tv/top-rated" element={<TopRatedTVPage />} />
            <Route path="/tv/favourites" element={<FavouriteTvPage />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
