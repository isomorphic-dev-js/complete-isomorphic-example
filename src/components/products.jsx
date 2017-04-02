import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import productActions from '../shared/products-action-creators.es6';
import searchActions from '../shared/search-action-creators.es6';
import Search from './search';
import Item from './item';

class Products extends React.Component {
  static loadData() {
    return [
      productActions.getProductCategories,
      productActions.getProducts
    ];
  }

  constructor(props) {
    super(props);
    this.state = {
      showToolTip: false
    };
  }

  componentDidMount() {
    this.clearTimer = setTimeout(() => {
      this.setState({
        showToolTip: true
      });
    }, 10000);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.query.length > 0) {
      clearTimeout(this.clearTimer);
    }
    console.log('cWU');
  }

  componentWillUnmount() {
    clearTimeout(this.clearTimer);
  }

  renderProductCategories() {
    const categories = this.props.categories;
    const productCategories = [];
    if (categories) {
      categories.forEach((product, index) => {
        const classes = classnames(product.icon, 'icon');
        let toolTip = null;
        if (
            this.state.showToolTip &&
            product.id === 'top-picks'
        ) {
          toolTip = (
            <div className="tooltip ui inverted">
              Not sure where to start? Try top Picks.
            </div>
          );
        }
        productCategories.push(
          <div
            key={`${product.id}${index}`}
            className="column segment secondary"
          >
            <Link className="product-link" to={`/products/${product.id}`}>
              <i className={classes} />
              <div className="category-title">{product.name}</div>
              {toolTip}
            </Link>
          </div>
        );
      });
    }
    return productCategories;
  }

  renderItems() {
    const allItems = this.props.products;

    const itemsArray = [];
    if (allItems) {
      const queryRegExp = new RegExp(this.props.query || '', 'gi');
      allItems.forEach((item, index) => {
        if (
          !this.props.query ||
          this.props.query.length === 0 ||
          item.name.search(queryRegExp) > -1 ||
          item.description.search(queryRegExp) > -1 ||
          item.details.search(queryRegExp) > -1
        ) {
          itemsArray.push(
            <Item {...item} key={`${item.name}${index}`} />
          );
        }
      });
    }
    return itemsArray;
  }

  render() {
    return (
      <div className="products">
        <Search {...this.props} />
        { (!this.props.query || !this.props.query.length) ?
          <div>
            <h1 className="ui dividing header">Shop by Category</h1>
            <div className="ui doubling four column grid">
              {this.renderProductCategories()}
            </div>
          </div>
          :
          <div className="ui segment divided middle items">
            {this.renderItems()}
          </div>
          }
      </div>
    );
  }
}

Products.propTypes = {
  categories: React.PropTypes.arrayOf(React.PropTypes.shape({
    icon: React.PropTypes.string,
    description: React.PropTypes.string,
    name: React.PropTypes.string,
    id: React.PropTypes.string
  })),
  products: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    details: React.PropTypes.string,
    id: React.PropTypes.string,
    price: React.PropTypes.number,
    thumbnail: React.PropTypes.string
  })),
  query: React.PropTypes.string
};

function mapStateToProps(state) {
  const { all, categories } = state.products;
  const { query } = state.search;
  return {
    products: all,
    categories,
    query
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
