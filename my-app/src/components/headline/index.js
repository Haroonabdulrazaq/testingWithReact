import React, { Component } from 'react'

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

export default Headline;
