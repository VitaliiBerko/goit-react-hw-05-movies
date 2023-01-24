import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './layout.module.css'


const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink
            to="/"
            className={css.link}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={css.link}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
