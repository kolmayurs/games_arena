import React from 'react';
import '../css/style.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {fetchData} from '../actions/reduxActions'

const mapStateToProps = (state) => {
  return {
    loading: state.fetch.loading,
    data: state.fetch.data
  }
}

class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {currentEvent : ''}
    this.onValueChange = this.onValueChange.bind(this);
  }

componentDidMount(){
    this.props.fetchData();
  }

onValueChange(e){
   this.setState({currentEvent: e.target.value});
}
  render(){
    console.log('Value : ' + this.state.currentEvent);
    const value = this.state.currentEvent;
    const games_data = this.props.data;
    let matched = false
    // eslint-disable-next-line
    const games_title = games_data.map((dynamicData,key) => {
      if (key<=20){
         if (dynamicData.title.toLowerCase().includes(value.toLowerCase())){
        matched = true
            return(
                  <div key={'title_' + key} ><Link to={'/r'+dynamicData.url}>{dynamicData.title}</Link></div>
                )}
          }
        });

        
if (!matched) {
    return(
          <nav>
        <div className="home"><Link to="/">Home</Link></div>
        <div className="editor"><Link to="/favorite">EditorChoice</Link></div>
        <div className="search">
          <input type="text"  placeholder="Search Games..."  onChange={this.onValueChange}/>
          <div  className="search_results">No Games Found that match the search criteria</div>
        </div>
      </nav>
           
        )
  }
  else{
    return(
      <nav>
        <div className="home"><Link to="/">Home</Link></div>
        <div className="editor"><Link to="/editor">EditorChoice</Link></div>
        <div className="search">
          <input type="text"  placeholder="Search Games..."  onChange={this.onValueChange}/>
          <div className="search_results">{games_title}</div>
        </div>
      </nav>
      )}
  }
}

export default connect(mapStateToProps, {fetchData})(Nav);