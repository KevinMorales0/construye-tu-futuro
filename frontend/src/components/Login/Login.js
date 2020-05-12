import "./Login.css";
import React,{useState} from "react";

function Login(props) {
    const [ic, setic] = useState(true)
    const [login, setlogin] = useState("")
    const [contraseña, setcontraseña] = useState("")
    const [estatus, setestatus] = useState("Estatus")
    
    const sendLogin = e => setlogin(e.target.value);
    const sendContraseña = e => setcontraseña(e.target.value);
    const sendEstatus = e => setestatus(e.target.value)
    const noReload = async e => {
        e.preventDefault()
        props.show();
    };
    return(
    <div className="sub-container">
        <button className="tec" onClick={() => props.setShow(false)}>x</button>
        
        <button className="ic ingresar" onClick={() => setic(true)}>Ingresar</button>
        <button className="ic crear" onClick={() => setic(false)}>Crear</button>
        
            
        {ic &&
            <div className="iniciar">
            <form onSubmit={noReload}>
                <label>Correo</label>
                <input 
                className="input"
                type="text" 
                placeholder="Leon-anonimo@correo.com" 
                onChange={sendLogin} 
                name="login" 
                value={login}/>
            
                <br/>
           
                <label>Contraseña</label>
                <input
                className="input"
                type="password"
                placeholder="pass"
                onChange={sendContraseña} 
                name="contain" 
                value={contraseña}/>
                <br/>
            
                <input className="sub" type="submit"/>
            </form>
        </div>
        }
        {!ic &&
        <div className="crate">
            <form onSubmit={noReload}>
                <label>Correo</label>
                <input 
                className="input"
                type="text" 
                placeholder="Leon-anonimo@correo.com" 
                onChange={sendLogin} 
                name="login" 
                value={login}/>
            
                <br/>
           
                <label >Contraseña</label>
                <input
                className="input"
                type="password"
                placeholder="pass"
                onChange={sendContraseña} 
                name="contain" 
                value={contraseña}/>
                <br/>
            
                <label>Confirmar Contraseña</label>
                <input
                className="input"
                type="password"
                placeholder="pass"
                onChange={sendContraseña} 
                name="contain" 
                value={contraseña}/>
                <br/>

                <select className="input sel" value={estatus} onChange={sendEstatus}>
                    <option value="estudiante">Estudiante</option>
                    <option value="profesor">Profesor</option>
                    <option id="no" value="Estatus">Estatus</option>
                </select>
                <br/>

                <input className="sub" type="submit"/>
            </form>
        </div>
        }
    </div>    
    )
}


export default Login;