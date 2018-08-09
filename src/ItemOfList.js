import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ItemOfList extends Component {

render () {
  return (
    <li className="listItem" onClick={(e) => this.props.onItemClick(this.props.id, e)}>
      {this.props.title}
    </li>
  )
}
}

export default ItemOfList
