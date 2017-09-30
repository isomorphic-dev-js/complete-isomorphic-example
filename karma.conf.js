var webpackConfig = require('./webpack.config.js');

Object.assign(webpackConfig, {
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window'
  }
});

module.exports = (config) => {
  config.set({
    frameworks: ['mocha', 'chai-sinon'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/**/*.+(es6|jsx)'
    ],

    exclude: [
      'src/test/middleware/**/*',
      'src/middleware/**/*',
      'src/test/**/*.server.spec.*'
    ],

    preprocessors: {
      'test/**/*.+(js|jsx|es6)': ['webpack', 'sourcemap']
    },

    browsers: ['Chrome'],

    autoWatch: true,

    plugins: [
      'karma-*'
    ],

    webpack: require('./webpack.config.js'),

    webpackMiddleware: {
      noInfo: false,
      stats: {
        chunks: false,
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: false,
        publicPath: false
      }
    }
  });
};
