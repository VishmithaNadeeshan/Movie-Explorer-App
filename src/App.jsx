import React from 'react';
import Header from './component/Header';
import SearchBar from './component/SearchBar';
import TrendingMovies from './component/TreandingMovies';
import MovieGrid from './component/MovieCard';
import MovieDetail from './component/MovieDetail';

function App() {
  return (
  
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Header />
        <main className="p-4">
          <SearchBar />
          <TrendingMovies />
          <MovieGrid />
          <MovieDetail />
        </main>
      </div>
  
  );
}

export default App;
