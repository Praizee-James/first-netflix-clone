import React from 'react';
import { Play, Info } from 'lucide-react';
import type { Movie } from '../types';

interface HeroBannerProps {
  movies?: Movie[];
  loading?: boolean;
  error?: string | null;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ 
  movies = [], 
  loading = false, 
  error = null 
}) => {
  // Use the first movie as the featured content, or fallback to default
  const featuredMovie = movies?.[0] || {
    title: "Stranger Things",
    image: "https://images.unsplash.com/photo-1574267432644-f610e3a4f6e8?w=1920&h=1080&fit=crop",
    rating: "98% Match",
    year: "2024"
  };

  if (loading) {
    return (
      <div className="relative h-screen w-full bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading featured content...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative h-screen w-full bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={featuredMovie.image} 
          alt={`${featuredMovie.title} Background`}
          className="w-full h-full object-cover"
        />
        
        {/* Dark Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            {featuredMovie.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-lg">
            <span className="text-green-500 font-semibold">{featuredMovie.rating}</span>
            <span className="text-gray-300">{featuredMovie.year}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">4 Seasons</span>
            <span className="border border-gray-400 px-1 text-sm text-gray-300">HD</span>
          </div>
          
          <p className="text-lg text-gray-200 max-w-2xl">
            When a young boy vanishes, a small town uncovers a mystery involving 
            secret experiments, terrifying supernatural forces and one strange little girl.
          </p>
          
          <div className="flex items-center space-x-4 pt-4">
            <button className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition font-semibold">
              <Play size={20} fill="black" />
              <span>Play</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-500/70 text-white px-6 py-2 rounded hover:bg-gray-500/50 transition font-semibold">
              <Info size={20} />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;