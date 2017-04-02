import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCT_CATEGORIES
} from './products-action-creators.es6';

export default function products(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        all: action.products
      };
    case `${GET_PRODUCTS}_ERROR`:
      return {
        ...state
      };
    case GET_PRODUCT_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    case `${GET_PRODUCT_CATEGORIES}_ERROR`:
      return {
        ...state
      };
    case GET_PRODUCT:
      return {
        ...state,
        currentProduct: action.currentProduct
      };
    case `${GET_PRODUCT}_ERROR`:
      return {
        ...state
      };
    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        currentCategory: action.productsInCategory
      };
    case `${GET_PRODUCTS_BY_CATEGORY}_ERROR`:
      return {
        ...state
      };
    default:
      return state;
  }
}
