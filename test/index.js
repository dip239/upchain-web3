const context = require.context('mocha!.', true, /^.*\.test.js$/)
context.keys().forEach(context)
