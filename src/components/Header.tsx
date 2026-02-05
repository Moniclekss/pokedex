import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
          <h2 className="header-title">Pokedex</h2>
          <div className="search-container">
            <input 
                type="text" 
                placeholder="Buscar Pokemon..." 
                className="search-input"
            /> 
            <button className="search-button">
                Buscar
            </button>
          </div>
        </header>
    );
}

export default Header;  