import React from 'react'
import './User.css'
import Usuario from '../../../visual/cat-4977436_1280.jpg'

function User(props){
    return (
        <div className="User-Data">
            <img className="User-Img" src={Usuario} alt="usuario"/>
            <div className="User-Info">
                <label>Michi Musk</label>
                <br/>
                <label>Marte</label>
            </div>
        </div>
    )
}

export default User;