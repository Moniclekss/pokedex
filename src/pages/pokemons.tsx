import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { fetchPokemons } from '../api/featchpokemons';

const Pokemons = () => {
    const [pokemons, setPokemons] = useState<{name: string, url: string}[]>([]);
    const [loading, setLoading] = useState(true);

    // Cuando el componente carga, pedimos los datos
    useEffect(() => {
        const getPokemons = async () => {
            const data = await fetchPokemons();
            setPokemons(data);
            setLoading(false);
        };
        getPokemons();
    }, []);

    return (
        <>
        <Header />
        <main>
            <h1>Pokédex</h1>    
            {loading ? (
                <p>Cargando Pokémon...</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
                    {pokemons.map((pokemon, index) => (
                        <li key={index} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center', borderRadius: '5px' }}>
                            {/* Al hacer clic en un Pokémon, nos lleva a la vista individual */}
                            <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none', color: 'black', textTransform: 'capitalize' }}>
                                {pokemon.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </main>
        <footer>
        </footer>
        </>
    ); 
}

export default Pokemons;
