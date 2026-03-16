export async function fetchPokemon(name) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
    
    try {
        const response = await fetch(URL);
        
        if (!response.ok) {
            throw new Error(`Error consiguiendo a ${name}`);
        }

        const data = await response.json();
        return {
            name: data.name,
            id: data.id,
            image: data.sprites.other["official-artwork"].front_default,
            types: data.types.map(typeInfo => typeInfo.type.name),
        };
        
    } catch (error) {
        console.error("Falló la conexión:", error);
        return null;
    }
}