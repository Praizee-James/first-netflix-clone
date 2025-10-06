import React from 'react';

import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';
import { categories } from './types';



const NetflixClone: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
     
      <Header />
      // In your App.tsx
<HeroBanner 
  title="Stranger Things"
  description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
  imageUrl="https://images.unsplash.com/photo-1574267432644-f610e3a4f6e8?w=1920&h=1080&fit=crop"
  rating="98% Match"
  year="2024"
  seasons="4 Seasons"
/>
      
      <div className="-mt-32 relative z-10">
        <MovieRow title="Trending Now" movies={categories.trending} />
        <MovieRow title="Action Movies" movies={categories.action} />
        <MovieRow title="Drama Series" movies={categories.drama} />
      </div>
      
      <Footer />
    </div>
  );
};

export default NetflixClone;