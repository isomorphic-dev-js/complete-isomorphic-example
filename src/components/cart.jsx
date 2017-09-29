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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired
    })
  )
};

export default Cart;
