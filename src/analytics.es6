import fetch from 'isomorphic-fetch';

// This is a mock - in a real app you would use a third party tool
// or your own internal system
window.analytics = {
  send: (opts) => {
    const headers = new window.fetch.Headers({
      'Content-Type': 'application/json'
    });

    fetch({
      url: 'http://localhost:3000/analytics',
      method: 'POST',
      headers,
      data: opts
    })
    .then((res) => {
      console.log('analytics result', res);
    })
    .catch((err) => {
      console.log('analytics err', err);
    });
  }
};

const getAnalytics = () => {
  return window.analytics;
};

export const sendData = (opts) => {
  getAnalytics().send(opts);
};

export default {
  sendData
};
