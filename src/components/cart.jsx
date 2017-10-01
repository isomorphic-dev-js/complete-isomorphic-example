import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Item from './item';
import cartActions from '../shared/cart-action-creators.es6';

export class CartComponent extends Component {

  static prefetchActions() {
    return [
      cartActions.getCartItems
    ];
  }

  constructor(props) {
    super(props);
    this.proceedToCheckout = this.proceedToCheckout.bind(this);
  }

  getTotal() {
    let total = 0;
    if (this.props.items) {
      total = this.props.items.reduce((prev, current) => {
        return prev + current.price;
      }, total);
    }
    return total;
  }

  proceedToCheckout() {
    this.props.router.push('/cart/payment');
  }

  renderItems() {
    const items = [];
    if (this.props.items) {
      this.props.items.forEach((item, index) => {
        items.push(<Item key={index} {...item} />);
      });
    }
    return items;
  }

  render() {
    return (
      <div className="cart main ui segment">
        <div className="ui segment divided items">
          {this.renderItems()}
        </div>
        <div className="ui right rail">
          <div className="ui segment">
            <span>Total: </span><span>${this.getTotal()}</span>
            <button
              onClick={this.proceedToCheckout}
              className="ui positive basic button"
            >
                Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

CartComponent.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    price: React.PropTypes.number,
    thumbnail: React.PropTypes.string
  })),
  router: React.PropTypes.shape({
    push: React.PropTypes.function
  })
};

function mapStateToProps(state) {
  const { items } = state.cart;
  return {
    items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
