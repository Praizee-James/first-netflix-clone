import React from 'react';
import { Play, Info } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=169&fit=crop" 
          alt="Stranger Things Background"
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
            Stranger Things
          </h1>
          
          <div className="flex items-center space-x-4 text-lg">
            <span className="text-green-500 font-semibold">98% Match</span>
            <span className="text-gray-300">2024</span>
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