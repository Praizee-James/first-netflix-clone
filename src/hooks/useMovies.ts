import { useState, useEffect } from 'react';
import type{ Movie } from '../types';

interface UseMoviesResult {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

export const useMovies = (fetchFunction: () => Promise<Movie[]>): UseMoviesResult => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchFunction();
        setMovies(data);
      } catch (err) {
        setError('Failed to fetch movies. Please check your API key.');
        console.error('Error fetching movies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [fetchFunction]);

  return { movies, loading, error };
};