import React from 'react';
import { Link } from 'react-router';
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
        {
          React.Children.map(
            props.children,
            (child) => {
              return React.cloneElement(
                child,
                { router: props.router }
              );
            }
          )
        }
      </div>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element,
  router: React.PropTypes.shape({
    push: React.PropTypes.function
  })
};

export default App;
