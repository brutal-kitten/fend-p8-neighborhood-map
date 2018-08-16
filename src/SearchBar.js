import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SearchBar extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query});
    this.props.searchForPlace(query);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {

    return (
      <div className="searchBar">
        <div className='search-box'>
          <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text"
            placeholder="Search by name"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            aria-label="Search teater by name"
            aria-required="true"
          />
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar
