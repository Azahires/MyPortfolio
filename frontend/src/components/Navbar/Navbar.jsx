import { Link } from "react-router-dom";
import Style from "./style";

export default function Navbar() {
  return (
    <Style>
      <nav className="navbar">
        <ul>
          <div className="box-name">
            <p className="family-name">HADDAD</p>
            <p className="name">Romain</p>
          </div>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/work">
            <li>WORK</li>
          </Link>
          <Link to="/about">
            <li>ABOUT</li>
          </Link>
          <Link to="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>
      </nav>
    </Style>
  );
}
