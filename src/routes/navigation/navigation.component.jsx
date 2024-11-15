import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';

function Navigation() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="topics">Topics</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
