import React, { Component } from 'react';

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
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    price: React.PropTypes.number,
    thumbnail: React.PropTypes.string
  }))
};

export default Cart;
