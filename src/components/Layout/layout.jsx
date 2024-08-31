import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
function Layout() {
  return (
    <>
      <header>
        <div>
          <Link to="Gallery">
            <h3>galleria.</h3>
          </Link>
        </div>

        <div>
          <Link to="Slideshow">
            <label>START SLIDESHOW</label>
          </Link>
        </div>
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default Layout;
