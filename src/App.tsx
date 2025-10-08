import React from 'react';
import Header from './components/Header';
import  HeroBanner from './components/HeroBanner';
import MovieRow  from './components/MovieRow';
import Footer from './components/Footer';
import {useMovies} from './hooks/useMovies';
import { tmdbService } from './services/tmdb.service';

const App: React.FC = () => {
  const { movies: trending, loading: trendingLoading, error: trendingError } = useMovies(
    tmdbService.fetchTrending
  );
  const { movies: popular, loading: popularLoading, error: popularError } = useMovies(
    tmdbService.fetchPopularMovies
  );
  const { movies: topRated, loading: topRatedLoading, error: topRatedError } = useMovies(
    tmdbService.fetchTopRatedMovies
  );
  const { movies: action, loading: actionLoading, error: actionError } = useMovies(
    tmdbService.fetchActionMovies
  );
  const { movies: tvShows, loading: tvShowsLoading, error: tvShowsError } = useMovies(
    tmdbService.fetchTVShows
  );

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroBanner movies={trending} />

      <div className="-mt-32 relative z-10">
        <MovieRow
          title="Trending Now"
          movies={trending}
          loading={trendingLoading}
          error={trendingError}
        />
        <MovieRow
          title="Popular on Netflix"
          movies={popular}
          loading={popularLoading}
          error={popularError}
        />
        <MovieRow
          title="Top Rated"
          movies={topRated}
          loading={topRatedLoading}
          error={topRatedError}
        />
        <MovieRow
          title="Action Movies"
          movies={action}
          loading={actionLoading}
          error={actionError}
        />
        <MovieRow
          title="TV Shows"
          movies={tvShows}
          loading={tvShowsLoading}
          error={tvShowsError}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;