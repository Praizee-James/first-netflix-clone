import { TMDB_CONFIG } from '../config/tmdb.config';
import type{ Movie } from '../types';
import { transformTMDBMovie } from '../utils/movieTransformer';

export const tmdbService = {
  fetchTrending: async (): Promise<Movie[]> => {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/trending/all/week?api_key=${TMDB_CONFIG.API_KEY}`
    );
    if (!response.ok) throw new Error('Failed to fetch trending');
    const data = await response.json();
    return data.results.map(transformTMDBMovie);
  },

  fetchPopularMovies: async (): Promise<Movie[]> => {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/popular?api_key=${TMDB_CONFIG.API_KEY}`
    );
    if (!response.ok) throw new Error('Failed to fetch popular movies');
    const data = await response.json();
    return data.results.map(transformTMDBMovie);
  },

  fetchTopRatedMovies: async (): Promise<Movie[]> => {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/top_rated?api_key=${TMDB_CONFIG.API_KEY}`
    );
    if (!response.ok) throw new Error('Failed to fetch top rated movies');
    const data = await response.json();
    return data.results.map(transformTMDBMovie);
  },

  fetchActionMovies: async (): Promise<Movie[]> => {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/discover/movie?api_key=${TMDB_CONFIG.API_KEY}&with_genres=28`
    );
    if (!response.ok) throw new Error('Failed to fetch action movies');
    const data = await response.json();
    return data.results.map(transformTMDBMovie);
  },

  fetchTVShows: async (): Promise<Movie[]> => {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/tv/popular?api_key=${TMDB_CONFIG.API_KEY}`
    );
    if (!response.ok) throw new Error('Failed to fetch TV shows');
    const data = await response.json();
    return data.results.map(transformTMDBMovie);
  },

  fetchMoviesByGenre: async (genreId: number): Promise<Movie[]> => {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/discover/movie?api_key=${TMDB_CONFIG.API_KEY}&with_genres=${genreId}`
    );
    if (!response.ok) throw new Error('Failed to fetch movies by genre');
    const data = await response.json();
    return data.results.map(transformTMDBMovie);
  },

  searchMovies: async (query: string): Promise<Movie[]> => {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/search/multi?api_key=${TMDB_CONFIG.API_KEY}&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) throw new Error('Failed to search movies');
    const data = await response.json();
    return data.results.map(transformTMDBMovie);
  },
};
