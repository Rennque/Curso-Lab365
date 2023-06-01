import React from "react";
import "../styles/Header.css";
import menu from "../images/menu.png";
import foto from "../images/Perfil.jpg";
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  const nome = "Henrique";
  return (
    <div className="header">
      <ul>
        <li>
          <a>Gmail</a>
        </li>
        <li>
          <a>Imagens</a>
        </li>
        <li>
           <MenuIcon className="menu-icon" />
        </li>
        <li>
          <img src={foto} alt="Foto" className="foto" />
        </li>
      </ul>
    </div>
  );
}

export default Header;