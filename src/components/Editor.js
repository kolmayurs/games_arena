import React, { Component } from 'react';
import '../css/style.css';
import Platform from './Platform';
import Loading from './Loading';
import Header from './Header';
 import Gamelist from './Gamelist';


class Editor extends Component {
  constructor(props){
      super(props);
      this.state = {loading:true}
    }

    componentDidMount(){
      this.setState({loading:false});
    }

  render() {

    if(this.props.loading || this.state.loading){
      return(<Loading />)
    }
    return (
      <div className="App">
        <Header/>
        <div className="game_list_container">
          <Platform activeTab={this.props.match.params.platform} />
          <Gamelist editor="Y" activeTab={this.props.match.params.platform} />
        </div>
      </div>
    );
  }
}

export default Editor;
