const Webpack = require('webpack')
module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname + '/build/',  // Path to where I want testBundle.js to be put
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: [ 'jsx-loader' ], exclude: /node_modules/ },
      { test: /\.js?$/, loaders: [ 'babel' ], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json?$/, loader: 'json-loader' }
    ]
  },
  externals: [ {
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  } ]
}
