import React from 'react';
import '../css/style.css';
import logo from '../img/default.png';
import { Link } from "react-router-dom";

class Logo extends React.Component{
  render(){
    return(
      <div className="logo">
        <Link to="/"><img src={logo} alt="Sapient Games Arena" title="Sapient Games Arena" />
        <div className="logo_name">Sapient Games Arena</div>
        </Link>
      </div>
      )
  }
}

export default Logo;