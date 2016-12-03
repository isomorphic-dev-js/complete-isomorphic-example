import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from '../action-creators';
// import classnames from 'classnames';


class App extends React.Component {

  static intialActions() {
    return [];
  }

  render() {
    return (
      <div className="main ui container">
        <div className="ui fixed inverted menu header">
          <h1>All Things Westies</h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

App.propTypes = {
  children: React.PropTypes.element
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
