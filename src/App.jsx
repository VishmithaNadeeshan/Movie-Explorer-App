import React from 'react';
import { MovieProvider } from './context/MovieContext';
import Header from './component/Header';
import SearchBar from './component/SearchBar';
import TrendingMovies from './component/TreandingMovies';
import MovieGrid from './component/MovieGrid';
import MovieDetail from './component/MovieDetail';
import SearchResults from './component/SearchResaults';

function App() {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-black text-white transition-colors">
        <Header />
        <main className="p-4">
          <SearchBar />
          <SearchResults/>
          <TrendingMovies />
          <MovieGrid />
          <MovieDetail />
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
