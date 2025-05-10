import React from 'react';
import { MovieProvider } from './context/MovieContext';
import Header from './component/Header';

import TrendingMovies from './component/TreandingMovies';
import MovieGrid from './component/MovieGrid';
import MovieDetail from './component/MovieDetail';

function App() {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Header />
        <main className="p-4">
          
          <TrendingMovies />
          <MovieGrid />
          <MovieDetail />
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
