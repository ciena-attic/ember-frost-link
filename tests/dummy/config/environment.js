var routingConfig = require('./routing')

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'dummy',
    podModulePrefix: 'dummy/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },

    APP: {
      routingConfig: routingConfig
    }
  }

  if (environment === 'production') {
    ENV.baseURL = '/ember-frost-link'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/'
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  return ENV
}
