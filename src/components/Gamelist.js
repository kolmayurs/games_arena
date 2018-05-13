import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/reduxActions';
import '../css/style.css';
import Loading from './Loading';
import defaultImg from '../img/default.png';
import {Link} from 'react-router-dom';
 
const mapStateToProps = (state) => {
  return {
    loading: state.fetch.loading,
    data: state.fetch.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({fetchData}, dispatch)
  }
}

function GetSortOrderLow(prop) {  
    return function(a, b) {  
        if (a[prop] > b[prop]) {  
            return 1;  
        } else if (a[prop] < b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
}  

function GetSortOrderHigh(prop) {  
    return function(a, b) {  
        if (a[prop] < b[prop]) {  
            return 1;  
        } else if (a[prop] > b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
}  

class Gamelist extends Component {
  constructor(props){
      super(props);
      this.state = {loading:false, score: ''}
      this.changeScore = this.changeScore.bind(this);
    }

    componentDidMount(){
      this.props.fetchData();
    }
    changeScore(value){
      this.setState({score: value})
    }
  render() {
      if (this.state.score === 'Low'){
    this.props.data.sort(GetSortOrderLow("score"));
  }

   if (this.state.score === 'High'){
    this.props.data.sort(GetSortOrderHigh("score"));
  }
    if(this.props.loading || this.state.loading){
      return(<Loading />)
    }
    let url ='';
    let uppurl = 'all';
    if(typeof this.props.activeTab === 'undefined'){
      uppurl = 'all'
    }
    else{
      uppurl = this.props.activeTab.replace(/_/g, " ").toUpperCase();
    }
    // eslint-disable-next-line
    const games_data = this.props.data.map((items, i) =>{
      url = items.platform.replace(/ /g, "_").toLowerCase();
      if(this.props.activeTab=== 'all' || typeof this.props.activeTab=== 'undefined'){
        if(items.editors_choice==="Y"){
          return(
        <Link key={'games_'+i}  to={'/r'+items.url}>
          <div className="inner_box_list">
          <div className="editor_box_list">Editors Choice</div>
            <img className="inner_box_img_list" src={defaultImg} alt="Games" />
            <div className="box_content_list">
              <div className="title_text_list">{items.title}</div>
              <div className="date_text_list">Release in {items.release_year} for {items.platform}</div>
               <div className="genre_text_list"><strong>Genre:</strong> {items.genre}</div>
              <div className="score_text_list"><strong>Score:</strong>&nbsp;&nbsp;<span className="score_high">{items.score}</span></div>
            </div>
          </div>
          </Link>
          )
        }
        if(items.editors_choice!=="Y" && this.props.editor!=="Y"){
          return(
          <Link key={'games_'+i}  to={'/r'+items.url}>
          <div className="inner_box_list">
            <img className="inner_box_img_list" src={defaultImg} alt="Games" />
            <div className="box_content_list">
              <div className="title_text_list">{items.title}</div>
              <div className="date_text_list">Release in {items.release_year} for {items.platform}</div>
               <div className="genre_text_list"><strong>Genre:</strong> {items.genre}</div>
              <div className="score_text_list"><strong>Score:</strong>&nbsp;&nbsp;<span className="score_high">{items.score}</span></div>
            </div>
          </div>
          </Link>
          )

        }
        
      }
      if(url === this.props.activeTab){
         if(items.editors_choice==="Y"){
          return(
          <Link key={'games_'+i}  to={'/r'+items.url}>
          <div className="inner_box_list">
          <div className="editor_box_list">Editors Choice</div>
            <img className="inner_box_img_list" src={defaultImg} alt="Games" />
            <div className="box_content_list">
              <div className="title_text_list">{items.title}</div>
              <div className="date_text_list">Release in {items.release_year} for {items.platform}</div>
               <div className="genre_text_list"><strong>Genre:</strong> {items.genre}</div>
              <div className="score_text_list"><strong>Score:</strong>&nbsp;&nbsp;<span className="score_high">{items.score}</span></div>
            </div>
          </div>
          </Link>
          )
        }
        if(items.editors_choice!=="Y" && this.props.editor!=="Y"){
          return(
          <Link key={'games_'+i}  to={'/r'+items.url}>
          <div className="inner_box_list">
            <img className="inner_box_img_list" src={defaultImg} alt="Games" />
            <div className="box_content_list">
              <div className="title_text_list">{items.title}</div>
              <div className="date_text_list">Release in {items.release_year} for {items.platform}</div>
               <div className="genre_text_list"><strong>Genre:</strong> {items.genre}</div>
              <div className="score_text_list"><strong>Score:</strong>&nbsp;&nbsp;<span className="score_high">{items.score}</span></div>
            </div>
          </div>
          </Link>
          )

        }
      }
      
    })
    return (
          <div className="game_list">
          <div className="result_display">Result showing for {uppurl} Platform</div>
           <div className="sort">
            <div className="container">
              <div className="sort_text">Sort By</div>
              <div className="sort_icon"><i className="icon ion-chevron-down"></i></div>
              <div className="clearfix"></div>
            </div>
            <ul className="list"><li onClick={this.changeScore.bind(this, 'High')} className="items">High: Score</li><li onClick={this.changeScore.bind(this, 'Low')} className="items">Low: Score</li></ul>
          </div>
          {games_data}
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gamelist);

Gamelist.defaultProps = {
  activeTab: 'all',
  editor:"N"
};
