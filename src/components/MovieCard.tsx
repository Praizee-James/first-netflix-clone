import React, { useState } from 'react';
import { Play } from 'lucide-react';
import type { Movie } from '../types';  

interface MovieCardProps {
  movie: Movie; 
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div 
      className="relative flex-shrink-0 w-64 transition-transform duration-300 hover:scale-110 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img 
        src={movie.image} 
        alt={movie.title}
        className="w-full h-36 object-cover rounded"
      />
      {hovered && (
        <div className="absolute inset-0 bg-black/90 rounded p-4 flex flex-col justify-end">
          <h4 className="text-white font-bold text-sm mb-1">{movie.title}</h4>
          <div className="flex items-center justify-between text-xs">
            <span className="text-green-500">{movie.rating}</span>
            <span className="text-gray-400">{movie.year}</span>
          </div>
          <div className="flex space-x-2 mt-2">
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200" aria-label="Play">
              <Play size={16} fill="black" />
            </button>
            <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white" aria-label="Add to list">
              <span className="text-white text-xl leading-none">+</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;