import React from 'react'
import Uni from '../../../Data/University'
import UCard from '../../Cards/UCard/UCard'
import './University.css'

export default function University(props) {
    return (
        <div className="Uni-Main" >
            {Uni[props.ciudad].map(e => <UCard onClick ={() => props.capa([true,e.title])} key={e.title} imagen={e.imagen} title={e.title} description={e.description}/>)}
        </div>
    )
}
