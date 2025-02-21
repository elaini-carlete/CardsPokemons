import logo from "../../assets/logo-pokemon.png";
import lupa from "../../assets/lupa.png";

import Types from "../TypesPokemon/index";
import { HeaderStyle } from "./style";

export default function Header() {
    return (
        <HeaderStyle> 
            <div>
                <img src={logo} alt="Logo Pokemon" />

                <div>
                    <div>
                        <input type="text" placeholder="Digite o nome do pokémon" />
                        <img src={lupa} alt="Lupa" />
                    </div>

                    <Types />
                </div>
            </div>
        </HeaderStyle>
    );
}