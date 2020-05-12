import React from 'react'
import  "./CityCard.css";

export default class CityCard extends React.Component {
    pickerCallback = message => {
    if (message && message.nativeEvent && message.nativeEvent.data) {
      console.log(message.nativeEvent.data); // response from ImageColorPicker
    }
  };
   
  render(){
    return (
        <div onClick={this.props.onClick} className="CityCard-Main">
                <h1 className="CityCard-Title">{this.props.title}</h1>
                <p className="CityCard-Info">{this.props.description}</p>

                <hr className="CityCard-Divide" />
                
                <img  className="CityCard-Img" alt={this.props.title} src={this.props.imagen}/>
                 
        </div>
    )
  }
}
