import type{ TMDBMovie, Movie } from '../types';
import { getImageUrl } from './imageHelper';

export const transformTMDBMovie = (movie: TMDBMovie): Movie => {
  const title = movie.title || movie.name || 'Unknown';
  const year = movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0] || 'N/A';
  const rating = `${Math.round(movie.vote_average * 10)}% Match`;
  
  return {
    id: movie.id,
    title,
    image: getImageUrl(movie.backdrop_path || movie.poster_path),
    rating,
    year,
  };
};
