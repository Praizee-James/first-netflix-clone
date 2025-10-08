import { TMDB_CONFIG } from '../config/tmdb.config';

export const getImageUrl = (path: string | null, size: string = 'w500'): string => {
  if (!path) return 'https://via.placeholder.com/300x169?text=No+Image';
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${size}${path}`;
};
