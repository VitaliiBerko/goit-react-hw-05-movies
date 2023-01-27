import { useState, useEffect, Fragment } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { fetchApiMovieDetails } from 'servicec/API.service';
import css from './movieDetails.module.css';
import clsx from 'clsx';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickBack = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    setIsLoading(true);

    fetchApiMovieDetails(movieId)
      .then(data => setDetails(data))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  const { title, poster_path, overview, popularity } = details;
  const releaseDate = new Date(details.release_date).getFullYear();

  return (
    <Fragment>
      {isLoading && <h2>Loading... </h2>}

      {details && (
        <>
          <button type="button" onClick={handleClickBack} className={css.btn}>
            Go back
          </button>

          <div className= {clsx(css.movieDetails, css.container)}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
            <div className={css.description}>
              <h2>{title}</h2>
              <h3>{releaseDate}</h3>
              <h3>Use Score: {popularity}</h3>
              <div>
                <h2>Overwie</h2>
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className={css.addInfor}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast" state={location.state}>Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location.state}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default MovieDetails;
