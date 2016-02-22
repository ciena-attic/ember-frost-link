/* globals module */

'use strict'

const pkg = require('./package.json')

module.exports = {
  name: pkg.name,

  included: function (app) {
    this._super.included(app)
  }
}
