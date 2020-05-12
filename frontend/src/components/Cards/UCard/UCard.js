import React from 'react'
import './UCard.css'

export default function UCard(props) {
    return (
        <div onClick={props.onClick} className="UCard-Main">
                <h1 className="UCard-Title">{props.title}</h1>
                <p className="UCard-Info">{props.description}</p>

                <hr className="UCard-Divide" />
                
                <img  className="UCard-Img" alt={props.title} src={props.imagen}/>
        </div>
    )
}
