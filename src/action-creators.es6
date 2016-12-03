import { fetch, Headers } from 'isomorphic-fetch';

export function doSomething(data) {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  return (dispatch) => {
    return fetch('http://localhost:3000/add/', {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }).then(() => {
      return dispatch({
        type: 'test',
        item: data
      });
    }).catch(() => {
      return dispatch({ type: `${'test'}_ERROR` });
    });
  };
}

export default {
  doSomething
};
