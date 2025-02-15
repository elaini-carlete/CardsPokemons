import { useState, useEffect } from "react";
import { fetchPokemon } from "../api/fetchPokemon"

export default function CardPokemon() {

    //variável para pegar os pokemons e seus dados/ações
    const [pokemonData, setPokemonData] = useState([]);

    //variável para pegar só os 10 pokemons
    const [pokemonCount] = useState(0);

    ///função para carregar + 10 pokemons quando clicar no botão
    // function updatePokemonCount() {
    //     setPokemonCount(pokemonCount + 10);
    // }

    useEffect(() => {
        const cardPokemon = fetchPokemon(pokemonCount);
        cardPokemon.then((data) => setPokemonData([...pokemonData, ...data])); 
        }, [pokemonCount]);

    return (
        <div>
            <img src="./src/assets/logo-white.png" alt="Logo Branca" />
            <ul>
                {pokemonData.map((pokemon, index) => (
                    <li key={index}>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                        <p>{pokemon.type}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}