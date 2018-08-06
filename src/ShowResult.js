import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ShowResult extends Component {

  static propTypes = {
    locations: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="resultlist">
        <ul className="list">
        {this.props.locations.map((item) => (
          <li>{item.title}</li>
        ))}
        </ul>
      </div>
    )
  }

}

export default ShowResult
