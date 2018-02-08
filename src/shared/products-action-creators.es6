import fetch from 'isomorphic-fetch';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_CATEGORIES = 'GET_PRODUCT_CATEGORIES';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const GET_PRODUCT = 'GET_PRODUCT';

export function getProducts() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/products', {
      method: 'GET'
    }).then((response) => {
      return response.json().then((data) => {
        return dispatch({
          type: GET_PRODUCTS,
          products: data
        });
      });
    }).catch(() => {
      return dispatch({ type: `${GET_PRODUCTS}_ERROR` });
    });
  };
}

export function getProductCategories() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/products/categories', {
      method: 'GET'
    }).then((response) => {
      return response.json().then((data) => {
        return dispatch({
          type: GET_PRODUCT_CATEGORIES,
          categories: data
        });
      });
    }).catch(() => {
      return dispatch({ type: `${GET_PRODUCT_CATEGORIES}_ERROR` });
    });
  };
}

export function getProductsByCategory(category) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/products/${category}`, {
      method: 'GET'
    }).then((response) => {
      return response.json().then((data) => {
        return dispatch({
          type: GET_PRODUCTS_BY_CATEGORY,
          productsInCategory: data
        });
      });
    }).catch(() => {
      return dispatch({ type: `${GET_PRODUCTS_BY_CATEGORY}_ERROR` });
    });
  };
}

export function getProduct(id) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/product/${id}`, {
      method: 'GET'
    }).then((response) => {
      return response.json().then((data) => {
        return dispatch({
          type: GET_PRODUCT,
          currentProduct: data
        });
      });
    }).catch(() => {
      return dispatch({ type: `${GET_PRODUCT}_ERROR` });
    });
  };
}

export default {
  getProducts,
  getProductCategories,
  getProduct,
  getProductsByCategory
};
