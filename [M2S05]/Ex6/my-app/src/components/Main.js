import React from "react";
import googleLogo from "../images/google-logo-1.png";
import Main from "../styles/Main.css";

function Main() {
  return (
    <div className="main">
      <img className="logo" src={googleLogo} alt="Google Logo" />
      <input className="inputMain" type="text"></input>
      <div className="main-btn">
        <button className="botao">Pesquisa Google</button>
        <button className="botao">Estou com sorte</button>
      </div>
    </div>
  );
}

export default Main;