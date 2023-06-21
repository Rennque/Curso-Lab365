import React from "react";
import { FaSearch, FaRegBell, FaUser } from "react-icons/fa";
import googleLogo from "../images/google-logo-1.png";
import Main from "../styles/Main.css";

function Main() {
  return (
    <div className="main">
      <img className="logo" src={googleLogo} alt="Google Logo" />
      <div className="input-container">
        <input className="inputMain" type="text" placeholder="Digite algo..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="main-btn">
        <button className="botao">Pesquisa Google</button>
        <button className="botao">Estou com sorte</button>
      </div>
      <div className="icons-container">
        <FaRegBell className="icon" />
        <FaUser className="icon" />
      </div>
    </div>
  );
}

export default Main;