import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/MovieDetails/Cast/Cast';
import Reviews from 'pages/MovieDetails/Reviews/Reviews';

const Layout = lazy(() => import('./Layout/Loyout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

export const App = () => {
  return (
    <Fragment>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>

      <ToastContainer />
    </Fragment>
  );
};
