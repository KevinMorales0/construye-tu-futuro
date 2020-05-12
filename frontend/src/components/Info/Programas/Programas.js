import React from 'react'
import Program from '../../../Data/Programas'
import PCard from '../../Cards/PCard/PCard'
import './Programas.css'

export default function Programas(props) {
    return (
        <div className="Pro-Main">
            {Program[props.uni].map(e => <PCard key={e.title} imagen={e.imagen} title={e.title} description={e.description}/>)}
        </div>
    )
}
