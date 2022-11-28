import { Link } from "react-router-dom";
import "./nav.scss";

const Navigation = () => {
  return (
    <>
      <nav className="top-nav">
        <div className="logo">
          <Link to="/">
            <img src="../assets/logo.png" alt=""></img>
          </Link>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>

        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/hobby">Hobby</Link>
          </li>

          <li>
            <Link to="/words">Word</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
