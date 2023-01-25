import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { fetchApiMovieDetails } from 'servicec/API.service';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(useParams());

  const handleClickBack = () => navigate(location?.state?.from ?? '/');
  //   const handleClickBack = () => location?.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;

    setIsLoading(true);
    console.log(fetchApiMovieDetails());

    fetchApiMovieDetails(movieId)
      .then(data => setDetails(data))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  const { title, poster_path, overview, release_date, popularity } = details;
  console.log(details);

  return (
    <>
      {isLoading && <h2>Loading... </h2>}
      <div>
        {details && (
          <>
            <button type="button" onClick={handleClickBack}>
              Go back
            </button>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
              <h2>{title}</h2>
              <h3>{release_date}</h3>
              <p>Use Score: {popularity}</p>
              <div>
                <h2>Overwie</h2>
                <p>{overview}</p>
              </div>
            </div>
          </>
        )}
        <div>
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
