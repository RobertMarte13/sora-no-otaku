import { Link } from "react-router-dom";
import "../../style/menu.css";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Link className="marca" to="/">
          Sora No <span>Otaku</span>
        </Link>
        <input type="search" className="buscador" />
      </div>
      <ul className="lista">
        <li>
          <Link to="/">Perfil</Link>
        </li>
        <li>
          <Link to="/">Registrarse</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
