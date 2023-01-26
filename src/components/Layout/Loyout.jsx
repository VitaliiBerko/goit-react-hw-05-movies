import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './layout.module.css';

const aciveStyle = {
  color: 'tomato',
};

const Layout = () => {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink
            to="/"
            className={css.link}
            style={({ isActive }) => (isActive ? aciveStyle : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={css.link}
            style={({ isActive }) => (isActive ? aciveStyle : null)}
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
