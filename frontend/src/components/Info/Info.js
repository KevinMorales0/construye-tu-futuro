import React, {useState} from 'react'
import City from './City/City'
import University from './University/University'
import Programas from './Programas/Programas'
import './Info.css'

export default function Info() {
    const [capa1, setcapa1] = useState([true,""]);
    const [capa2, setcapa2] = useState([false,""])
    return (
        <div className="Info-Main">
            {capa1[0] &&
                <City capa={setcapa1}/>
                }
            {(!capa1[0]  && !capa2[0]) &&
                <University ciudad={capa1[1]} capa={setcapa2}/>
            }{capa2[0] &&
                <Programas uni={capa2[1]}/>
            }   
        </div>
    )
}
