export interface TMDBMovie {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
}

export interface Movie {
  id: number;
  title: string;
  image: string;
  rating: string;
  year: string;
}