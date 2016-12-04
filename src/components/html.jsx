import React from 'react';

const HTML = (props) => {
  return (
    <html lang="en">
      <head>
        <title>All Things Westies</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/semantic-ui/2.2.2/semantic.min.css"
        />
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

export default HTML;
