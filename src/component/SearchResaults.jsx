import React from 'react';
import { useMovies } from '../context/MovieContext'; // Adjust path as needed
import MovieCard from './MovieCard';

const SearchResults = () => {
  const { movies, searchQuery, fetchMovies, page } = useMovies();

  const handleLoadMore = () => {
    fetchMovies(searchQuery, page + 1);
  };

  if (!searchQuery) return null;

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-xl font-semibold mb-4">Search Results for: <span className="italic">{searchQuery}</span></h2>

      {movies.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No results found.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition"
            >
              Load More
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
