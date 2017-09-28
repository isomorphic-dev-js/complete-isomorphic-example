import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {

  render() {
    return (
      <div className="cart main ui segment">
        Cart!
      </div>
    );
  }
}

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string
  }))
};

export default Cart;
