import React, { Component } from 'react';
import PropTypes from 'prop-types';


 class Headline extends Component {
   constructor(props){
     super(props);
     this.state = {
       
     }
   }
  render() {
    let {header, description} = this.props
    if(!header){
      return null;
    }
    return (
      <div data-test="HeadlineComponent">
        <h2 data-test="header" className="header-text">{header}</h2>
        <p data-test="desc" >{description}</p>
      </div>
    )
  }
}

Headline.propTypes =  {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(PropTypes.shape({
    firstname:  PropTypes.string,
    lastname: PropTypes.string,
    Email: PropTypes.string,
    age: PropTypes.number,
    OnlineStatus: PropTypes.bool,
  }))
}
 

export default Headline;
