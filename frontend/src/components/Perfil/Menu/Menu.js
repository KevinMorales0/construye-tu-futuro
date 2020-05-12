import React from 'react'
import Options from './Options/Options'
import "./Menu.css"

export default function Menu() {
    return (
        <div className="Menu-Main">
            <Options nombre="Preferencias"/>
            <Options nombre="Mis Favoritos"/>
        </div>
    )
}
