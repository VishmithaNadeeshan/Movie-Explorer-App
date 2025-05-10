import React from 'react';
import { useMovies } from '../context/MovieContext';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useMovies();

  return (
    <button
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      onClick={() => setDarkMode(prev => !prev)}
    >
      {darkMode ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
};

export default DarkModeToggle;
