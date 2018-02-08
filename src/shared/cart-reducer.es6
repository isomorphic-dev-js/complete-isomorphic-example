import {
  GET_CART_ITEMS,
  ADD_ITEM_TO_CART
} from './cart-action-creators.es6';

export default function cart(state = {}, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        items: action.data
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [
          ...state.items,
          action.item
        ]
      };
    case `${GET_CART_ITEMS}_ERROR`:
      return state;
    default:
      return state;
  }
}
