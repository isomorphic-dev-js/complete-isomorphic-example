import React from 'react';

const HTML = () => {
  return (
    <html lang="en">
      <head>
        <title>Chapter 5 - Redux</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/semantic-ui/2.2.2/semantic.min.css"
        />
      </head>
      <body>
        <div
          id="react-content"
          dangerouslySetInnerHTML={{ __html: this.props.html }}
        />
      </body>
    </html>
  );
};

export default HTML;
