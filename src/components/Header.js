import React from 'react';
//import FontAwesome from 'react-fontawesome';
//import PropTypes from 'prop-types';
import Logo from './Logo';
import Nav from './Nav';
import '../css/style.css';

class Header extends React.Component{
  render(){
    return(
        <header> 
          <div className="container">
            <Logo />
            <Nav />
            <div className="clearfix"></div>
          </div>
        </header>
      )
  }
}
export default Header