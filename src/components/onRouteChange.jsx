import React from 'react';
import PropTypes from 'prop-types';

const onRouteChange = (WrappedComponent) => {
  return class extends React.PureComponent {

    trackPageView() {
      // In real life you would hook this up to your analytics tool of choice
      console.log('Tracked a pageview');
    };

    componentDidMount() {
      this.trackPageView();
    }

    componentWillReceiveProps(nextProps) {
      const navigated = nextProps.location !== this.props.location;

      if (navigated) {
        this.trackPageView();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  onRouteChange.propTypes = {
    //TODO: This is unreachable code!!
    location: PropTypes.string.isRequired,
    Component: PropTypes.element.isRequired
  };
}

export default onRouteChange;
