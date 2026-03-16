import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPokemons } from '../api/featchpokemons';
import './Header.css';

const Header = () => {
    const [search, setSearch] = useState('');
    const [allPokemons, setAllPokemons] = useState<{name: string}[]>([]);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    // Cargamos todos los Pokémon una vez cuando el Header aparece
    useEffect(() => {
        const getPokemons = async () => {
            const data = await fetchPokemons();
            setAllPokemons(data);
        };
        getPokemons();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        if (value.trim().length > 0) {
            // Filtramos la lista de todos los Pokémon buscando coincidencias con lo que se escribe
            const filtered = allPokemons
                .map(p => p.name)
                .filter(name => name.toLowerCase().includes(value.toLowerCase()))
                .slice(0, 10); // Mostrar solo las primeras 10 coincidencias
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (name: string) => {
        setSearch(name);
        setShowSuggestions(false);
        navigate(`/pokemon/${name.toLowerCase()}`);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (search.trim()) {
            setShowSuggestions(false);
            navigate(`/pokemon/${search.toLowerCase().trim()}`);
        }
    };

    return (
        <header className="header">
          <h2 className="header-title" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Pokedex</h2>
          <form className="search-container" onSubmit={handleSearch} style={{position: 'relative'}}>
            <input 
                type="text" 
                placeholder="Buscar Pokemon..." 
                className="search-input"
                value={search}
                onChange={handleChange}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // ocultar al perder el foco
                onFocus={() => { if(search) setShowSuggestions(true) }}
            /> 
            
            {/* Contenedor de sugerencias */}
            {showSuggestions && suggestions.length > 0 && (
                <ul style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '200px', // Igual que el width del input en Header.css
                    backgroundColor: 'white',
                    color: 'black',
                    listStyle: 'none',
                    padding: '0',
                    margin: '5px 0 0 0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    maxHeight: '200px',
                    overflowY: 'auto',
                    zIndex: 1000
                }}>
                    {suggestions.map((name, idx) => (
                        <li 
                            key={idx} 
                            onClick={() => handleSuggestionClick(name)}
                            style={{
                                padding: '10px',
                                cursor: 'pointer',
                                borderBottom: '1px solid #eee',
                                textTransform: 'capitalize'
                            }}
                            onMouseEnter={(e: React.MouseEvent<HTMLLIElement>) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                            onMouseLeave={(e: React.MouseEvent<HTMLLIElement>) => e.currentTarget.style.backgroundColor = 'white'}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            )}

            <button type="submit" className="search-button">
                Buscar
            </button>
          </form>
        </header>
    );
}

export default Header;  