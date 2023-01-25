import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApiReviews } from 'servicec/API.service';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    fetchApiReviews(movieId)
      .then(({ results }) =>
        setReviews(
          results.map(({ author, content }) => {
            return { author, content };
          })
        )
      )
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}

      <div>
        <ul>
          {reviews.map(({ author, content }) => {
            return (
              <li key={content}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Reviews;
