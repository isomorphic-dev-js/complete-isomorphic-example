//TODO: Put the file name in the Listing title
import React from 'react';
import PropTypes from 'prop-types';
import { matchRoutes } from 'react-router-config';
import { sendData } from '../analytics.es6';

const onRouteChange = (WrappedComponent) => {
  return class extends React.PureComponent {

    static wrappedComponent() {
      return WrappedComponent;
    }

    trackPageView() {
      // In real life you would hook this up to your analytics tool of choice
      console.log('Tracked a pageview');
    };

    fetchData(nextProps) {
      const { route, location } = nextProps;
      const { routes } = route;
      const matches = matchRoutes(routes, location.pathname);
      let results = matches.map(({match, route}) => {
        const component = route.component;
        if (component) {
          if (component.displayName &&
              component.displayName.toLowerCase().indexOf('connect') > -1
          ) {
            let parentComponent = component.WrappedComponent
            if (parentComponent['prefetchActions']) {
              return parentComponent['prefetchActions'](
                location.pathname.substring(1)
              );
            } else if (parentComponent.wrappedComponent && parentComponent.wrappedComponent()['prefetchActions']) {
              return parentComponent.wrappedComponent()['prefetchActions'](
                location.pathname.substring(1)
              );
            }
          } else if (component['prefetchActions']) {
            return component['prefetchActions'](
              location.pathname.substring(1)
            )
          }
        }
        return [];
      });

      const actions = results.reduce((flat, toFlatten) => {
        return flat.concat(toFlatten);
      }, []);

      const promises = actions.map((initialAction) => {
        return this.props.dispatch(initialAction());
      });
      Promise.all(promises);
    }

    sendAnalytics(location) {
      sendData({
        location: location && location.pathname,
        type: 'navigation'
      });
    }

    componentDidMount() {
      this.trackPageView();
      this.sendAnalytics(this.props.location);
    }

    componentWillReceiveProps(nextProps) {
      this.fetchData(nextProps);
      const navigated = nextProps.location !== this.props.location;

      if (navigated) {
        this.trackPageView();
      }

      this.sendAnalytics(nextProps.location);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  //TODO: This is unreachable!!!
  onRouteChange.propTypes = {
    location: PropTypes.string.isRequired,
    Component: PropTypes.element.isRequired
  };
}

export default onRouteChange;
