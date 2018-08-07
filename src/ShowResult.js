import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ItemOfList from './ItemOfList'

class ShowResult extends Component {

  static propTypes = {
    locations: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="resultlist">
        <ul className="list">
        {this.props.locations.map((item) => (
          <ItemOfList
          title={item.name}
          key={item.id} />
        ))}
        </ul>
      </div>
    )
  }

}

export default ShowResult
