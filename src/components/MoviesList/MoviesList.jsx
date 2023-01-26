import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

const MoviesList = ({ movies, path }) => {
  const location = useLocation();
  const addPath = path ? `${path}/` : '';

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${addPath}${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string.isRequired,
};

export default MoviesList;
