import React, { useState } from 'react';
import { useMovies } from '../context/MovieContext';

const SearchBar = () => {
  const { setSearchQuery, fetchMovies } = useMovies();
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setSearchQuery(input);
    fetchMovies(input, 1);
  };

  return (
    <div className="flex gap-2 my-4">
      <input
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={e => setInput(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-600 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
