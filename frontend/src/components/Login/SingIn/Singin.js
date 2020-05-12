import "./Login.css";
import React,{useState} from "react";

function SingIn (props){
    return(
        <form onSubmit={props.noReload}>
                <label for="login">Correo</label>
                <input 
                className="input"
                type="text" 
                placeholder="Leon-anonimo@correo.com" 
                onChange={props.sendLogin} 
                name="login" 
                value={props.login}/>
            
                <br/>
           
                <label for="contraseña">Contraseña</label>
                <input
                className="input"
                type="password"
                placeholder="pass"
                onChange={props.sendContraseña} 
                name="contain" 
                value={props.contraseña}/>
                <br/>
            
                <input className="sub" type="submit"/>
            </form>
    )
}

export default SingIn;