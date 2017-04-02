export const UPDATE_SEARCH_QUERY = 'updateSearchQuery';

export function updateSearchQuery(query) {
  return {
    type: UPDATE_SEARCH_QUERY,
    query
  };
}

export default {
  updateSearchQuery
};
