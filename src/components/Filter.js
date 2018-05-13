import React from 'react';
import '../css/styles.css';
import PropTypes from 'prop-types';

class Filter extends React.Component{
	constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleYear = this.handleYear.bind(this);
  }

   handleChange(items) {
    const name = items;
    console.log('Filter : ' + name)
    this.props.onChange(name);
  }

handleYear(items) {
    const year = items;
    console.log('Filter : ' + year)
    this.props.onClick(year);
  }

 

  render(){
  	const sort = ['ALL','Rating: Low','Rating: High','Popularity: Low','Popularity: High'];
     const cat_sort = sort.map((items,index) => {
      return (
        <li key={'sort' + index} className="items" onClick={this.handleChange.bind(this, items)} >{items}</li>
      )
    });
    const years = ['ALL','2011','2012','2013','2014','2015','2016','2017','2018'];
     const cat_years = years.map((items,index) => {
      return (
        <li key={'years' + index} className="items" onClick={this.handleYear.bind(this, items)}>{items}</li>
      )
    });
    return(
        <div className="filter">
          <div className="sort">
            <div className="container">
              <div className="sort_text">Sort By</div>
              <div className="sort_icon"><i className="icon ion-chevron-down"></i></div>
              <div className="clearfix"></div>
            </div>
            <ul className="list">{cat_sort}</ul>
          </div>
          <div className="year">
            <div className="container">
              <div className="year_text">Year</div>
              <div className="year_icon"><i className="icon ion-chevron-down"></i></div>
              <div className="clearfix"></div>
            </div>
            <ul className="list">{cat_years}</ul>
          </div>
        </div>
      )
  }
}

export default Filter


Filter.propTypes = {
  name: PropTypes.string
};