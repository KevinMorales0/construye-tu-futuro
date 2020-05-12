import React from 'react'
import './Button-Nav.css'

export default function ButtonNav(props) {
    return (
        <button 
            className="Nav-Button"
            onClick={props.action}
            >{props.text}
        </button>
    )
}
