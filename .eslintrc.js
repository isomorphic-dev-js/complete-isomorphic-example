module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "arrow-body-style": [0, "as-needed", {
        requireReturnForObjectLiteral: false,
      }],
      "comma-dangle": ["error", "never"],
      "no-underscore-dangle": [0]
    },
    "globals": {
      "window": true,
      "document": true,
    }
};
