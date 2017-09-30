import React from 'react';
import PropTypes from 'prop-types';

const HTML = (props) => {
  const metatagsArray = [];
  props.metatags.forEach((item) => {
    metatagsArray.push(
      <meta {...item} />
    );
  });

  return (
    <html lang="en">
      <head>
        <title
          dangerouslySetInnerHTML={{
            __html: props.title || 'All Things Westies'
          }}
        />
        {metatagsArray}
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css"
        />
        <link rel="stylesheet" href="/assets/style.css" />
      </head>
      <body>
        <div
          id="react-content"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.__SERIALIZED_STATE__ =
              JSON.stringify(${props.serverState})
          `
        }}
        />
        <script type="application/javascript" src="/browser.js" />
      </body>
    </html>
  );
};

HTML.propTypes = {
<<<<<<< HEAD
  html: React.PropTypes.string,
  serverState: React.PropTypes.string,
  title: React.PropTypes.string,
  metatags: React.PropTypes.arrayOf(React.PropTypes.shape({
    content: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
    property: React.PropTypes.string
  }))
=======
  html: PropTypes.string,
  serverState: PropTypes.string
>>>>>>> 5c456cd... chore: fix prop types issues
};

export default HTML;
