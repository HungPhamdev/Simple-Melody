import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/song">
            Song
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/alo">
            Temp
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Layout;
