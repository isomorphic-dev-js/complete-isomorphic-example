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
  children: PropTypes.element.isRequired,
  router: PropTypes.shape({
    push: PropTypes.function
  })
};

export default App;
