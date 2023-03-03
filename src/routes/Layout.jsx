import { Link, Outlet } from "react-router-dom";
import "./layout.css";

export function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/planning">Planning</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
