import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const App = (props) => {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <h1 className="header item">All Things Westies</h1>
        <Link to="/products" className="item">Products</Link>
        <Link to="/cart" className="item">Cart</Link>
        <Link to="/profile" className="item">Profile</Link>
      </div>
      <div className="ui main text container">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
