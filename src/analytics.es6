import fetch from 'isomorphic-fetch';

// This is a mock - in a real app you would use a third party tool
// or your own internal system
if (process.env.BROWSER) {
  window.analytics = {
    send: (opts) => {
      fetch('http://localhost:3000/analytics', {
        method: 'POST',
        body: JSON.stringify(opts)
      })
      .then((res) => {
        console.log('analytics result', res);
      })
      .catch((err) => {
        console.log('analytics err', err);
      });
    }
  };
}

const getAnalytics = () => {
  if (process.env.BROWSER) {
    return window.analytics;
  }
  return {
    send: () => {
      console.error('Window was not available, do not call sendData');
    }
  };
};

export const sendData = (opts) => {
  getAnalytics().send(opts);
};

export default {
  sendData
};
