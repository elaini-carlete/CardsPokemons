import Types from "../TypesPokemon/index";
import { HeaderStyle } from "./style";

export default function Header() {
    return (
        <HeaderStyle> 
            <div>
                <img src="src/assets/logo-pokemon.png" alt="Logo Pokemon" />

                <div>
                    <div>
                        <input type="text" placeholder="Digite o nome do pokémon" />
                        <img src="src/assets/lupa.png" alt="Lupa" />
                    </div>

                    <Types />
                </div>
            </div>
        </HeaderStyle>
    );
}