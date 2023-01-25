import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApiCast } from 'servicec/API.service';

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

  return(<>
  {isLoading && <h2>Loading...</h2>}
  
  <div>
    <ul>
    {cast.map(({name, character, profile_path})=>{
        return( <li key={profile_path}>
            <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name}  width='200'/>
            <h2>{name}</h2>
            <p>{character}</p>
        </li>)
       
    })}
    </ul>
  </div>
  </>)
};

export default Cast;
