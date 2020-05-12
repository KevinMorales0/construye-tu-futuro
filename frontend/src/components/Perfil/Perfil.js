import "./Perfil.css";
import User from './User/User'
import Menu from './Menu/Menu'
import React from "react";

function Perfil(props) {
    const startLogin = () => props.setstartLogin(true)
    const close = () => props.close(false)
    return(
    <div className="Perfil-Main">
        <button className="Perfil-Close" onClick={close} >></button>
        <div className="Perfil-User">
            <User/>
        </div>
        <div className="Perfil-Menu">
            <Menu/>
        </div>
        <div className="Perfil-Login">
            <button className="Login-Button" onClick={startLogin}>Iniciar Sesion</button>
        </div>
    </div>
    )
}
export default Perfil;