export interface BaseMovieProps {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
  genre_ids?: number[];
}
export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}

export interface MovieDetailsProps extends BaseMovieProps {
  genres: {
    id: number;
    name: string;
  }[];

  production_countries: {
    iso_3166_1: string; //From TMBD Reference - https://developer.themoviedb.org/reference/movie-details
    name: string;
  }[];
}

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; //some props are optional...
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export type FilterOption = "title" | "genre";

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}

  export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }


export interface GenreData {
  genres: {
    id: string;
    name: string;
  }[];
}

export interface DiscoverMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

// Defining TV Type for TV view
export interface BaseTvProps {
  id: number;
  name: string;
  homepage: string | undefined;
  poster_path?: string;
  episode_run_time: number [];
  first_air_date?: string;
  last_air_date?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  status: string;
  tagline: string;
  original_language: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  favourite?: boolean;
}

export interface TvDetailsProps extends BaseTvProps {
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
}

export interface TvPageProps {
  tv: TvDetailsProps;
  images: MovieImage[]; // Reusing MovieImage interface as structure is same
}
