import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div className="cart main ui segment">
        <div className="ui segment divided items">
          Items will go here.
        </div>
        <div className="ui right rail">
          <div className="ui segment">
            <span>Total: </span><span>$10</span>
            <div>Placeholder</div>
            <button className="ui positive basic button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
