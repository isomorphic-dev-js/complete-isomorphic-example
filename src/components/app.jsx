import React from 'react';

const App = (props) => {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <h1 className="header item">All Things Westies</h1>
        <a href="/products" className="item">Products</a>
        <a href="/cart" className="item">Cart</a>
        <a href="/profile" className="item">Profile</a>
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
