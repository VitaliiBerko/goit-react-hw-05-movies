import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchApiMovies } from 'servicec/API.service';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchApiMovies('trending')
      .then(({ results }) => {
        setMovies([...results.map(({ id, title }) => ({ id, title }))]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <MoviesList path={'movies/'} movies={movies} />
    </>
  );
};

export default HomePage;
