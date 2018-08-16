import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ItemOfList extends Component {

render () {
  return (
    <li tabIndex="0" className="listItem" onFocus={(e) => this.props.onItemClick(this.props.title, e)} onClick={(e) => this.props.onItemClick(this.props.title, e)}>
      {this.props.title}
    </li>
  )
}
}

export default ItemOfList
