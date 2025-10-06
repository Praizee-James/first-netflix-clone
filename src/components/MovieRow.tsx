import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Movie } from '../types';
import MovieCard from './MovieCard';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right'): void => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="px-8 mb-8">
      <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition"
          aria-label="Scroll left"
        >
          <ChevronLeft size={32} />
        </button>
        
        <div 
          ref={rowRef}
          className="flex space-x-4 overflow-x-hidden scroll-smooth"
        >
          {movies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition"
          aria-label="Scroll right"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;