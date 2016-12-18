import React from 'react';

const HTML = (props) => {
  return (
    <html lang="en">
      <head>
        <title>All Things Westies</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css"
        />
      <link rel="stylesheet" href="assets/style.css" />
      </head>
      <body>
        <div
          id="react-content"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </body>
    </html>
  );
};

HTML.propTypes = {
  html: React.PropTypes.string
};

export default HTML;
