import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cartActions from '../shared/cart-action-creators.es6';
import productActions from '../shared/products-action-creators.es6';

class Detail extends React.Component {

  static createTitle(props) {
    return `${props.name} - All Things Westies`;
  }

  static getTitle(params, store) {
    const currentProduct = store.products && store.products.currentProduct;

    return Detail.createTitle(currentProduct);
  }

  static createMetatags(params, store) {
    const tags = [];
    const item = store.products ? store.products.currentProduct : null;
    if (item) {
      tags.push({
        name: 'description',
        content: item.description
      });
      tags.push({
        property: 'og:description',
        content: item.description
      });
      tags.push({
        property: 'og:title',
        content: item.name
      });
      tags.push({
        property: 'og:url',
        content: `http://localhost:3000/product/detail/${item.id}`
      });
      tags.push({
        property: 'og:image',
        content: item.thumbnail
      });
    }
    return tags;
  }

  static prefetchActions(params) {
    return [
      productActions.getProduct.bind(null, params.product)
    ];
  }

  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    document.getElementsByTagName('title')[0].innerHTMl = Detail.createTitle(this.props);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.name === nextProps.name &&
        this.props.description === nextProps.description &&
        this.props.details === nextProps.details &&
        this.props.price === nextProps.price &&
        this.props.thumbnail === nextProps.thumbnail) {
      // do not re render
      console.log("not rerendering detail component");
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    document.getElementsByTagName('title')[0].innerHTMl = Detail.createTitle(this.props);
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
      <div className="ui one column middle">
        <h2 className="ui dividing header">{this.props.name}</h2>
        <img className="ui large image" src={this.props.thumbnail} alt={this.props.description} />
        <div className="ui message">
          <p>{this.props.description}</p>
          <div>Price: <span>{this.props.price}</span></div>
          <p>{this.props.details}</p>
        </div>
        <button className="ui button" onClick={this.addToCart}>Add To Cart</button>
      </div>
    );
  }
}

Detail.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  cartActions: PropTypes.shape({
    addItemToCart: PropTypes.func
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
