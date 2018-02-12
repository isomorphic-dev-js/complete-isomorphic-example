import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Cart from '../components/cart';
import Products from '../components/products';
import Profile from '../components/profile';
import Login from '../components/login';


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
        <Route path="/" exact component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />

      </div>
    </div>
  );
};

export default withRouter(App);


