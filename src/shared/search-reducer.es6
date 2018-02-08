import { UPDATE_SEARCH_QUERY } from './search-action-creators.es6';

export default function search(state = {}, action) {
  switch (action.type) {
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        query: action.query
      };
    default:
      return state;
  }
}
