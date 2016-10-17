module.exports = {
  entry: [
    'mocha!./lib/client.test.js' // The mocha loader command pointing to the test root. Note the ! is escaped.
  ],
  output: {
    path: __dirname + '/client/test/',  // Path to where I want testBundle.js to be put
    filename: 'testBundle.js'
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
