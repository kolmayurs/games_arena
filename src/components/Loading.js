import React, { Component } from 'react';
import '../css/style.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <div className="item item-1"></div>
        <div className="item item-2"></div>
        <div className="item item-3"></div>
        <div className="item item-4"></div>
      </div>
    );
  }
}

export default Loading;
