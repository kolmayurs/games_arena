import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/reduxActions';
import '../css/style.css';
import {Link} from 'react-router-dom';
import Loading from './Loading';

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

class Platform extends Component {
  constructor(props){
      super(props);
      this.state = {loading:false, platform:[]}
    }

    componentDidMount(){
      this.props.fetchData();
    }

  render() {
    if(this.props.loading || this.state.loading){
      return(<Loading />)
    }
    let all_tab = (<Link to={'/platform/all'}><li>ALL Platforms</li></Link>);
    if(this.props.activeTab==='all'){
      all_tab = (<Link to={'/platform/all'}><li className="active">ALL Platforms</li></Link>);
    }
    else{
      all_tab = (<Link to={'/platform/all'}><li>ALL Platforms</li></Link>);
    }
    let a = [];
    let url ='';
    // eslint-disable-next-line
    const fetch_data = this.props.data.map((items,i) =>{
      if(a.indexOf(items.platform) === -1){
        a.push(items.platform);
        url = items.platform.replace(/ /g, "_").toLowerCase();
        if(this.props.activeTab===url){
          return(<Link to={'/platform/' + url} key={'games_platform_' + i}><li className="active">{items.platform}</li></Link>)
        }
        else{
          return(<Link to={'/platform/' + url} key={'games_platform_' + i}><li>{items.platform}</li></Link>)
        }   
      }
    })
    return (
        <div className="sidebar">
          <ul className="listview">
          {all_tab}
          {fetch_data}
          </ul>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform);

Platform.defaultProps = {
  activeTab: 'all',
};

