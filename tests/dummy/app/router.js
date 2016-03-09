import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

var addRoute = function (routeConfig) {
  if (Ember.isEmpty(routeConfig.items)) {
    if (routeConfig.path !== undefined && routeConfig.modalName !== undefined) {
      this.route(routeConfig.id, routeConfig.path, function () {
        this.modal(routeConfig.modalName, routeConfig.modal)
      })
    } else if (routeConfig.path !== undefined) {
      this.route(routeConfig.id, routeConfig.path)
    } else if (routeConfig.modalName !== undefined) {
      this.route(routeConfig.id, function () {
        this.modal(routeConfig.modalName, routeConfig.modal)
      })
    } else {
      this.route(routeConfig.id)
    }
  } else {
    if (routeConfig.path !== undefined) {
      this.route(routeConfig.id, routeConfig.path, function () {
        routeConfig.items.forEach((item) => {
          addRoute.call(this, item)
        })
      })
    } else {
      this.route(routeConfig.id, function () {
        routeConfig.items.forEach((item) => {
          addRoute.call(this, item)
        })
      })
    }

  }
}

Router.map(function () {
  let routerConfig = config.APP.routingConfig
  routerConfig.forEach((item) => {
      addRoute.call(this, item)
    })
    //  this.route('demo', { path: '/' }, function () {
    //    this.route('min')
    //    this.route('first', {path: '/first/:first_id'}, function () {
    //      this.route('second', {path: '/second/:second_id'})
    //    })
    //  })
})

export default Router
