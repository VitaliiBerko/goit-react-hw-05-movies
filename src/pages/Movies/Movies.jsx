import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { fetchApiSearchMovies } from 'servicec/API.service';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) return;

    fetchApiSearchMovies(searchQuery)
      .then(({ results }) => {
        const searchMovies =
          [...results.map(({ id, title }) => ({ id, title }))] ?? [];
        if (!searchMovies.length) {
          toast.info('Movie is not found');
        }
        setMovies(searchMovies);
      })
      .catch(error => {
        console.log(error);
      });
  }, [searchQuery]);

  const onSubmit = value => {
    setSearchParams({ query: `${value}` });
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {movies && <MoviesList movies={movies} path={''} />}
    </>
  );
};

export default Movies;
