import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './styles.scss';

class Button extends Component {
  constructor(props){
    super(props);

    this.submitEvent = this.submitEvent.bind(this)
  }

  submitEvent(){
    if(this.props.emitEvent){
      this.props.emitEvent()
    }
  }

  render(){
    const {buttonText} = this.props 

    return (
      <button onClick={()=> this.submitEvent()} data-test='buttonComponent'>
        {buttonText}
      </button>
    )
  }

}

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default Button;
