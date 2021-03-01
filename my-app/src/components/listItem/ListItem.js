import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
  }

  render() {
    const {title, desc} = this.props
    if(!title){
      return null
    }
    return (
      <div data-test="listItemComponent">
        <h3 data-test="title">{title}</h3>
        <p data-test="desc">{desc}</p>
      </div>
    )
  }
}

export default ListItem;
