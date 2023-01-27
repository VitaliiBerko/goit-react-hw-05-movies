import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApiCast } from 'servicec/API.service';
import css from '../movieDetails.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    fetchApiCast(movieId)
      .then(({ cast }) =>
        setCast(
          cast.map(({ name, character, profile_path }) => {
            return { name, character, profile_path };
          })
        )
      )
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}

      <div className={css.container}>
        <ul className={css.cardSet}>
          {cast.map(({ name, character, profile_path }) => {
            return (
              <li key={profile_path} className={css.item}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                  width="200"
                />
                <h2>{name}</h2>
                <p>{character}</p>
              </li>
            );
          })}
        </ul>
      </div>
      {!cast.length && <h2>Sorry. We dont have cast for this movie</h2>}
    </>
  );
};

export default Cast;
