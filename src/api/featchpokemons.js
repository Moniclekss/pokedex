export async function fetchPokemons() {
    // Para conectar con un archivo en GitHub:
    // 1. Entra a tu archivo en GitHub.com
    // 2. Pulsa el botón que dice "Raw" (o "Crudo")
    // 3. Copia ese enlace y pégalo aquí abajo:
    
    const URL = "PON_AQUI_EL_LINK_RAW_DE_GITHUB"; 
    
    try {
        const response = await fetch(URL);
        
        if (!response.ok) {
            throw new Error("Error conectando con GitHub: " + response.statusText);
        }

        const data = await response.json();
        // GitHub suele devolver el JSON directo. 
        // Si tu archivo tiene una propiedad "results", usa data.results
        return data.results || data; 
        
    } catch (error) {
        console.error("Falló la conexión:", error);
        return []; 
    }
}