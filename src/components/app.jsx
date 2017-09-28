import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <h1 className="header item">All Things Westies</h1>
        <a href="/products" className="item">Products</a>
        <a href="/cart" className="item">Cart</a>
        <a href="/profile" className="item">Profile</a>
      </div>
      <div className="ui main text container">
        Content Placeholder
      </div>
    </div>
  );
};

export default App;
