import Ember from 'ember'
import layout from '../templates/components/frost-link'

function addPriorityClass (priority, classes) {
  switch (priority) {
    case 'primary':
      classes.push('primary')
      break
    case 'secondary':
      classes.push('secondary')
      break
    case 'tertiary':
      classes.push('tertiary')
      break
    default:
      // no class to add for invalid priority
      break
  }
}

function addSizeClass (size, classes) {
  switch (size) {
    case 'small':
      classes.push('small')
      break
    case 'medium':
      classes.push('medium')
      break
    case 'large':
      classes.push('large')
      break
    default:
      // no class to add for invalid size
      break
  }
}

export default Ember.LinkComponent.extend({
  classNames: ['frost-link'],

  classNameBindings: [
    'disabled',
    'extraClasses',
    'isPressed'
  ],

  attributeBindings: [
    'isPressed',
    'disabled'
  ],

  priority: '',

  size: 'medium',

  layout,

  extraClasses: Ember.computed('priority', function () {
    const classes = []
    addSizeClass(this.get('size'), classes)
    addPriorityClass(this.get('priority'), classes)

    return classes.join(' ')
  }),

  onMouseDown: Ember.on('mouseDown', function (event) {
    if ((!Ember.ViewUtils.isSimpleClick(event)) || this.get('disabled')) {
      return true
    }
    this.set('isPressed', true)
  }),

  onMouseUp: Ember.on('mouseUp', function () {
    if (this.get('disabled')) {
      return true
    }
    this.set('isPressed', false)
  }),

  onMouseEnter: Ember.on('mouseEnter', function () {
    if (this.get('disabled')) {
      return true
    }
    this.set('isHovered', true)
  }),

  onMouseLeave: Ember.on('mouseLeave', function () {
    if (this.get('disabled')) {
      return true
    }
    this.set('isHovered', false)
  }),

  onFocusIn: Ember.on('focusIn', function () {
    if (this.get('disabled')) {
      return true
    }
    this.set('isFocused', true)
  }),

  onFocusOut: Ember.on('focusOut', function () {
    if (this.get('disabled')) {
      return true
    }
    this.set('isFocused', false)
  })
})
