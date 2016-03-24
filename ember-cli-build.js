/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },
    sassOptions: {
      includePaths: [
        'node_modules/ember-frost-theme/scss',
        'node_modules/ember-frost-css-core/scss'
      ]
    }
  })

  app.import('bower_components/highlightjs/styles/github.css')

  return app.toTree()
}
