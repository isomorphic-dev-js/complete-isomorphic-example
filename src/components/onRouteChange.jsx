import React from 'react';
import PropTypes from 'prop-types';

const onRouteChange = (WrappedComponent) => {
  return class extends React.PureComponent {

    trackPageView() {
      // In real life you would hook this up to your analytics tool of choice
      console.log('Tracked a pageview');
    };
    //TODO: This code does not even come close to the code in the docs
    fetchData(nextProps) {
      const { route, location } = nextProps;
      const { routes } = route;
      let routeComponent;
      for (let key in routes) {
        if (routes[key].path === location.pathname) {
          routeComponent = routes[key].component;
          break;
        }
      }
      let actions = [];
      if (routeComponent && routeComponent.prefetchActions) {
        actions.push(routeComponent.prefetchActions());
      }

      actions = actions.reduce((flat, toFlatten) => {
        return flat.concat(toFlatten);
      }, []);

      const promises = actions.map((initialAction) => {
        return this.props.dispatch(initialAction());
      });
      Promise.all(promises);
    }

    componentDidMount() {
      this.trackPageView();
    }

    componentWillReceiveProps(nextProps) {
      this.fetchData(nextProps);
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
    location: PropTypes.string.isRequired,
    Component: PropTypes.element.isRequired
  };
}

export default onRouteChange;
