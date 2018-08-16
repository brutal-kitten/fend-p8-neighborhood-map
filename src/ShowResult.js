import React, { Component } from 'react';

import ItemOfList from './ItemOfList'

class ShowResult extends Component {


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
