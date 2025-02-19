import { ButtonStyle } from "./style";
export default function ButtonMaisPokemons({ updatePokemonCount }) {
    return (
        <ButtonStyle>
            <div onClick={updatePokemonCount}>
                <button>Carregar Mais</button>
            </div>
        </ButtonStyle>
    )
}