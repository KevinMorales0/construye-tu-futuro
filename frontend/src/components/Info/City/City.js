import Data from '../../../Data/City.json'
import CityCards from "../../Cards/CityCard/CityCard";
import React from 'react'
import './City.css'

export default function City(props) {
    
    return (
        <div className="City-Main">
            {Data.map(e => <CityCards onClick ={() => props.capa([false,e.title])} key={e.title} imagen={e.imagen} title={e.title} description={e.description}/>)}
            <hr/>
        </div>
    )
}
