import React from 'react';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.searchQuery.length > 0) {
      clearTimeout(this.clearTimer);
    }
  }

  updateSearchQuery() {
    let query = this.search.value;
    this.props.searchActions.updateSearchQuery(query);
    this.setState({
      searchQuery: query
    });
  }

  render() {
    return (
      <div className="ui search">
        <div className="ui item input">
          <input
            className="prompt"
            type="text"
            value={this.state.searchQuery}
            ref={(input) => { this.search = input; }}
            onChange={this.updateSearchQuery}
          />
          <i className="search icon" />
        </div>
        <div className="results" />
      </div>
    );
  }
}
