import React from 'react'
import './PCard.css'

export default function PCard(props) {
    return (
        <div onClick={props.onClick} className="PCard-Main">
                <h1 className="PCard-Title">{props.title}</h1>
                <p className="PCard-Info">{props.description}</p>

                <hr className="PCard-Divide" />
                
                <img  className="PCard-Img" alt={props.title} src={props.imagen}/>
        </div>
    )
}
