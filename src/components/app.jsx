import React from 'react';

const App = () => {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <h1 className="header item">All Things Westies</h1>
        <a to="/products" className="item">Products</a>
        <a to="/cart" className="item">Cart</a>
        <a to="/profile" className="item">Profile</a>
      </div>
      <div className="ui main text container">
        Content Placeholder
      </div>
    </div>
  );
};

export default App;
