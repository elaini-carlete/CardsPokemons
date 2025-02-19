import { useState, useEffect } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";
import Header from "../Header/index";
import ButtonMaisPokemons from "../Button/index";

export default function CardsPokemon() {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonCount, setPokemonCount] = useState(0);

    function updatePokemonCount() {
        setPokemonCount(pokemonCount + 10);
    }

    useEffect(() => {
        const cardsPokemon = fetchPokemon(pokemonCount);
        cardsPokemon.then((data) => setPokemonData([...pokemonData, ...data])); 
    }, [pokemonCount]);

    return (
        <div>

            <Header />

            <ul>
                {pokemonData.map((pokemon, index) => (
                    <li key={index}>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                        <p>{pokemon.type}</p>
                    </li>
                ))}
            </ul>

            <ButtonMaisPokemons updatePokemonCount={updatePokemonCount} />

        </div>
    )
}