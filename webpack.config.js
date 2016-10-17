const Webpack = require('webpack')
module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    // export itself to a global var
    libraryTarget: 'var',
    // name of the global var: 'Foo'
    library: 'UpchainWeb3',
    filename: 'upchainweb3.js',
    path: 'dist'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: [ 'jsx-loader' ], exclude: /node_modules/ },
      { test: /\.js?$/, loaders: [ 'babel'], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json?$/, loader: 'json-loader' }
    ]
  },
  externals: [ {
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  } ]
}
