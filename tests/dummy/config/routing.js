module.exports = [
  {
    id: 'demo',
    alias: 'Demo',
    type: 'category',
    route: 'demo',
    path: {
      path: '/'
    },
    items: [{
      id: 'min',
      alias: 'First',
      type: 'route',
      route: 'demo.min'
    }, {
      id: 'first',
      alias: 'First',
      type: 'route',
      route: 'demo.min',
      path: {
        path: '/first/:first_id'
      },
      items: [{
        id: 'second',
        alias: 'Second',
        type: 'route',
        path: {
          path: '/second/:second_id'
        },
        route: 'demo.second'
      }]
    }]
  }
]
