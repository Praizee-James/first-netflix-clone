// src/services/tmdb.ts

const API_KEY = '4bb4b30adf1f7bdf00500b59a782b7f4'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Type definitions for TMDB API responses
export interface TMDBMovie {
  id: number;
  title: string;
  name?: string; // For TV shows
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  vote_average: number;
  release_date: string;
  first_air_date?: string;
  genre_ids: number[];
  media_type?: string;
}

export interface TMDBResponse {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

// Helper function to construct image URLs
export const getImageUrl = (path: string | null, size: string = 'w500'): string => {
  if (!path) return 'https://via.placeholder.com/500x750?text=No+Image';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

// API Endpoints
export const tmdbAPI = {
  // Get Trending Movies/TV Shows
  getTrending: async (mediaType: 'all' | 'movie' | 'tv' = 'all', timeWindow: 'day' | 'week' = 'week'): Promise<TMDBResponse> => {
    const response = await fetch(
      `${BASE_URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error('Failed to fetch trending');
    return response.json();
  },

  // Get Popular Movies
  getPopularMovies: async (page: number = 1): Promise<TMDBResponse> => {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    if (!response.ok) throw new Error('Failed to fetch popular movies');
    return response.json();
  },

  // Get Top Rated Movies
  getTopRatedMovies: async (page: number = 1): Promise<TMDBResponse> => {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`
    );
    if (!response.ok) throw new Error('Failed to fetch top rated movies');
    return response.json();
  },

  // Get Now Playing Movies
  getNowPlayingMovies: async (page: number = 1): Promise<TMDBResponse> => {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`
    );
    if (!response.ok) throw new Error('Failed to fetch now playing movies');
    return response.json();
  },

  // Get Upcoming Movies
  getUpcomingMovies: async (page: number = 1): Promise<TMDBResponse> => {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`
    );
    if (!response.ok) throw new Error('Failed to fetch upcoming movies');
    return response.json();
  },

  // Get Movies by Genre
  getMoviesByGenre: async (genreId: number, page: number = 1): Promise<TMDBResponse> => {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
    );
    if (!response.ok) throw new Error('Failed to fetch movies by genre');
    return response.json();
  },

  // Get Popular TV Shows
  getPopularTVShows: async (page: number = 1): Promise<TMDBResponse> => {
    const response = await fetch(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${page}`
    );
    if (!response.ok) throw new Error('Failed to fetch popular TV shows');
    return response.json();
  },

  // Get Top Rated TV Shows
  getTopRatedTVShows: async (page: number = 1): Promise<TMDBResponse> => {
    const response = await fetch(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&page=${page}`
    );
    if (!response.ok) throw new Error('Failed to fetch top rated TV shows');
    return response.json();
  },

  // Search Movies/TV Shows
  search: async (query: string, page: number = 1): Promise<TMDBResponse> => {
    const response = await fetch(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
    );
    if (!response.ok) throw new Error('Failed to search');
    return response.json();
  },

  // Get Movie/TV Show Details
  getDetails: async (mediaType: 'movie' | 'tv', id: number) => {
    const response = await fetch(
      `${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
    );
    if (!response.ok) throw new Error('Failed to fetch details');
    return response.json();
  },
};

// Genre IDs for easy reference
export const GENRES = {
  ACTION: 28,
  ADVENTURE: 12,
  ANIMATION: 16,
  COMEDY: 35,
  CRIME: 80,
  DOCUMENTARY: 99,
  DRAMA: 18,
  FAMILY: 10751,
  FANTASY: 14,
  HISTORY: 36,
  HORROR: 27,
  MUSIC: 10402,
  MYSTERY: 9648,
  ROMANCE: 10749,
  SCIENCE_FICTION: 878,
  TV_MOVIE: 10770,
  THRILLER: 53,
  WAR: 10752,
  WESTERN: 37,
};