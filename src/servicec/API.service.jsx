import axios from "axios";


import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// https://api.themoviedb.org/3/movie/550?api_key=f4238f5bd8cc05dfda59a3450fa27d5e

const KEY = 'f4238f5bd8cc05dfda59a3450fa27d5e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchApiMovies =async(event, search ='')=> {
    const url= event==='trending'
    ? `${BASE_URL}/trending/movie/day?api_key=${KEY}`
    : `${BASE_URL}/search/movie?api_key=${KEY}&query=${search}`;

    try {
        const response  = await axios.get(url)
        return response.data
    } catch (error) {
        toast.error(error.message)
        
    }
}


// export const fetchApiSearchMovies =async(search) =>{

// }
