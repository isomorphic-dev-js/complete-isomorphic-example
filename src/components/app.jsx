import React from 'react';
import Banner from './banner';

const App = (props) => {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <h1 className="header item">All Things Westies</h1>
        <a href="/products" className="item">Products</a>
        <a href="/cart" className="item">Cart</a>
        <a href="/blog" className="item">Blog</a>
      </div>
      <Banner show>
        <h3>Check out the semi-annual sale! Up to 75% off select Items</h3>
      </Banner>
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
