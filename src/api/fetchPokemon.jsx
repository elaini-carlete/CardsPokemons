export const fetchPokemon = async (offset) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();

    const detailDataPromises = data.results.map(async (pokemon) => {
        const detailPokemon = await fetch(pokemon.url);
        const responseData = await detailPokemon.json();

        return{
            name: responseData.name,
            image: responseData.sprites.front_default,
            type: responseData.types[0].type.name
        } 
    });

    const detailData = await Promise.all(detailDataPromises);

    return detailData;
}