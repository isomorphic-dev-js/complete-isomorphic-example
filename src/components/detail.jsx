import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cartActions from '../shared/cart-action-creators.es6';
import productActions from '../shared/products-action-creators.es6';

class Detail extends React.Component {

  static createMetatags() {
    return [];
  }

  static loadData(params) {
    return [
      productActions.getProduct.bind(null, params.product)
    ];
  }

  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    // This is not a good interface to the API
    // In a real app there would be a data base and we would
    // just post the id to the rest endpoint.
    // TODO: fix this
    this.props.cartActions.addItemToCart({
      name: this.props.name,
      price: this.props.price,
      thumbnail: this.props.thumbnail
    });
  }

  render() {
    return (
      <div className="ui card middle">
        <h2>{this.props.name}</h2>
        <img src={this.props.thumbnail} alt={this.props.description} />
        <p>{this.props.description}</p>
        <div>Price: <span>{this.props.price}</span></div>
        <div>{this.props.details}</div>
        <button onClick={this.addToCart}>Add To Cart</button>
      </div>
    );
  }
}

Detail.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  details: React.PropTypes.string,
  price: React.PropTypes.number,
  thumbnail: React.PropTypes.string,
  cartActions: React.PropTypes.shape({
    addItemToCart: React.PropTypes.func
  })
};

function mapStateToProps(state) {
  const { currentProduct } = state.products;
  return {
    ...currentProduct
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
