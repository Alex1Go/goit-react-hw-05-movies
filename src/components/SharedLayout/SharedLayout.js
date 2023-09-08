import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Shared.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="/movies">MOVIES</NavLink>
          </li>
        </ul>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
