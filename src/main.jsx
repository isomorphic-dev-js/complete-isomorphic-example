import React from 'react';
import ReactDOM from 'react-dom';

const initialState = JSON.parse(window.__SERIALIZED_STATE__);
console.log(initialState);

function init() {
  ReactDOM.render(<div>
    Browser Render
  </div>, document.getElementById('react-content'));
}

init();
