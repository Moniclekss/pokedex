import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../Asset/home.css'; 

const Home = () => {
    return (
        <>
            <Header />
            <main className="home-main">
                <h1 className="home-title">Bienvenido a la Pokédex GIGANTE</h1>
                <p className="home-subtitle">¡Explora a todos los Pokémon existentes!</p>
                
                <Link to="/pokemons" className="home-button">
                    Buscar Pokémon
                </Link>
            </main>
        </>
    );
};

export default Home;