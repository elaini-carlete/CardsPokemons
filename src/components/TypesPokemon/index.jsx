import { useState, useEffect } from "react";
import { TypeStyle } from "./style";	

export default function Types() {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        async function fetchPokemonTypes() {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/type/");
                const data = await response.json();
                setTypes(data.results.map((type) => type.name));
            } catch (error) {
                console.error("Erro ao buscar tipos de Pokémon:", error);
            }
        }

        fetchPokemonTypes();
    }, []);

    return (
        <TypeStyle>
            <select
                name="pokemonType"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
            >
                <option value="">Selecione o tipo</option>
                {types.map((type, index) => (
                    <option key={index} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </TypeStyle>
    );
}
