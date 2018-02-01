import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import onRouteChange from './onRouteChange';
import Banner from './banner';

const App = (props) => {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <h1 className="header item">All Things Westies</h1>
        <Link to="/products" className="item">Products</Link>
        <Link to="/cart" className="item">Cart</Link>
        <Link to="/profile" className="item">Profile</Link>
      </div>
      <Banner show>
        <h3>Check out the semi-annual sale! Up to 75% off select Items</h3>
      </Banner>
      <div className="ui main text container">
        { renderRoutes(props.route.routes) }
      </div>
    </div>
  );
};

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      component: PropTypes.func
    }))
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}

export default onRouteChange(App);
