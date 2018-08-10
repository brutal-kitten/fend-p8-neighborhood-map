import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ItemOfList from './ItemOfList'

class ShowResult extends Component {

  static propTypes = {
    selectedPlaces: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="resultlist">
        <ul className="list">
        {this.props.selectedPlaces.map((item) => (
          <ItemOfList
          title={item.name}
          key={item.id}
          onItemClick={this.props.onItemClick}
          />
        ))}
        </ul>
      </div>
    )
  }

}

export default ShowResult
