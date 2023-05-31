import React from 'react';
import Header from '../styles/Header.css'

function Header() {

    const nome ="Henrique"

    return ( 
        <div className="Header">
    <h1>Hello {nome}</h1>
    <h2>Bem-Vindo</h2>
    </div>
    );
}

export default Header;