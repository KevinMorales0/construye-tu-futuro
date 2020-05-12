import React, { useState } from 'react';

import Nav from '../components/Nav/Nav'
import Info from '../components/Info/Info'
import Login from '../components/Login/Login'
import Perfil from '../components/Perfil/Perfil'
import Search from '../components/Search/Search'

import './App.css';
import mapa from '../visual/Recurso_7.png'
import Logo from '../visual/SVG/Logo.svg'

function App() {
  const [startLogin, setstartLogin] = useState(false);
  const [perfil, setperfil] = useState(false)
  const [search, setsearch] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Nav 
          search={search} 
          setsearch={setsearch} 
          perfil={perfil}
          setperfil={setperfil} 
          />
      <img className="Nav-Logo" alt="logo" src={Logo}/>
      </header>
      {search &&
        <div className="App-Search">
        <Search/>
      </div>
      }
      {!search &&
        <div className="App-Mapa">
          <img alt="Mapa" onClick={() => setstartLogin(true)} src={mapa}/>
        </div>
      }{search &&
        <div className="App-Mapa">
          <Info/>
        </div>
      }      
      {perfil &&
      <div className="App-Perfil">
        <Perfil
          setstartLogin={setstartLogin}
          close={setperfil}
          />
      </div>
      }
      {startLogin &&
        <div className="App-login">
          <Login 
            show = {startLogin} 
            setShow={setstartLogin}/>
        </div>
        }
    </div>
  );
}

export default App;
