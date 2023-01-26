import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const KEY = 'f4238f5bd8cc05dfda59a3450fa27d5e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchApiMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchApiSearchMovies = async (search = '') => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${KEY}&query=${search}`
    );
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchApiMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchApiCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};
export const fetchApiReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};
