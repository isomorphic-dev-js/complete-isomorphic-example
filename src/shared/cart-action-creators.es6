import fetch from 'isomorphic-fetch';

export const GET_CART_ITEMS = 'GET_CART_ITEMS';

export function getCartItems() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/user/cart', {
      method: 'GET'
    }).then((response) => {
      return response.json().then((data) => {
        return dispatch({
          type: GET_CART_ITEMS,
          data: data.items
        });
      });
    }).catch(() => {
      return dispatch({ type: `${GET_CART_ITEMS}_ERROR` });
    });
  };
}

export default {
  getCartItems
};
