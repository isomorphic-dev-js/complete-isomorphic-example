import React from 'react';
import classnames from 'classnames';

class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleDismissBanner = this.handleDismissBanner.bind(this);
  }

  componentDidMount() {
    const cookies = document.cookie;
    const hideBanner = cookies.match('showBanner=false');
    if (!hideBanner) {
      this.setState({
        show: true
      });
    }
  }

  handleDismissBanner() {
    document.cookie = 'showBanner=false';
    this.setState({
      show: false
    });
  }

  render() {
    const bannerClasses = classnames({ show: this.state.show }, 'banner');
    return (
      <div className={bannerClasses}>
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
