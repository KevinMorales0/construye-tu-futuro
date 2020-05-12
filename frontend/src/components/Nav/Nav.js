import "./Nav.css";
import React from "react";
import ButtonNav from './Button-Nav/Button-Nav'


function Nav(props) {
    const showSearch = () => props.setsearch(!props.search)
    const showPerfil = () => props.setperfil(!props.perfil)
    return(
        <div className="Nav-Main">
            <ButtonNav action={showSearch} text="Buscar"/>
            <ButtonNav action={showPerfil} text="Perfil"/>   
        </div>
    )
}

export default Nav;