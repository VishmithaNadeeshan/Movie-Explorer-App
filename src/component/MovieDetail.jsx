import React, { useEffect, useState } from 'react';
import { useMovies } from '../context/MovieContext';

const API_KEY = '9cacd67e0ba7fee5b5ac581763383e3d';

const MovieDetail = () => {
  const { selectedMovie, setSelectedMovie } = useMovies();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (!selectedMovie) return;
    const fetchDetail = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovie.id}?api_key=${API_KEY}&append_to_response=videos,credits`);
      const data = await res.json();
      setDetail(data);
    };
    fetchDetail();
  }, [selectedMovie]);

  if (!selectedMovie || !detail) return null;

  const trailer = detail.videos?.results.find(v => v.type === "Trailer");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 max-w-2xl w-full rounded p-6 overflow-auto">
        <button className="mb-4 text-red-600 float-right" onClick={() => setSelectedMovie(null)}>✖</button>
        <h2 className="text-xl font-bold mb-2">{detail.title}</h2>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{detail.overview}</p>
        <p className="text-sm">Genres: {detail.genres.map(g => g.name).join(', ')}</p>
        <p className="text-sm">Rating: ⭐ {detail.vote_average}</p>
        {trailer && (
          <div className="mt-4">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="YouTube trailer"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
