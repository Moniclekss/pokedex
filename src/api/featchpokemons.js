export async function fetchPokemons() {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000"; 
    
    try {
        const response = await fetch(URL);
        
        if (!response.ok) {
            throw new Error("Error conectando con la PokéAPI: " + response.statusText);
        }

        const data = await response.json();
        return data.results; 
        
    } catch (error) {
        console.error("Falló la conexión:", error);
        return []; 
    }
}