import React, { Component } from 'react';
import PropTypes from 'prop-types'

const ItemOfList = ( props ) => {

  return (
    <li className="listItem">
      {props.title}
    </li>
  )
}

export default ItemOfList
