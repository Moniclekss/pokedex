export async function fetchPokemons() {
    // URL de la PokéAPI pidiendo un límite alto que traiga a todos (hay más de 1000)
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000"; 
    
    try {
        const response = await fetch(URL);
        
        if (!response.ok) {
            throw new Error("Error conectando con la PokéAPI: " + response.statusText);
        }

        const data = await response.json();
        // data.results contiene el array con el nombre y URL de cada Pokémon
        return data.results; 
        
    } catch (error) {
        console.error("Falló la conexión:", error);
        return []; 
    }
}