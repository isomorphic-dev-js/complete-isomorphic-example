import React from 'react';
import classnames from 'classnames';

class Banner extends React.Component {

  handleDismissBanner() {
    // will do something
  }

  render() {
    return (
      <div className="banner">
        <div className="dismiss">
          <button
            className="btn-reset"
            onClick={this.handleDismissBanner}
          >
            X
          </button>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  children: React.PropTypes.element
};

export default Banner;
