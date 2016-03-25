[ember-frost-core]: https://github.com/ciena-frost/ember-frost-core
 
<span style="color: red">This repo has been ported to</span> [ember-frost-core] <span style="color: red"> - no more PRs will be accepted.</span>

[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-link.svg "Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-link

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-link.svg "Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-link

[npm-img]: https://img.shields.io/npm/v/ember-frost-link.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-link

# ember-frost-link <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

* [Installation](#installation)
* [API](#api)
* [Examples](#examples)
* [Development](#development)

## Installation
```
ember install ember-frost-link
```

## API

| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `disabled` | `boolean` | `false` | **default**: Click to redirect from one route to another |
| | | `true` | :no_entry_sign: Can't click this! :notes: |
| `size` | `string` | `small` | The smallest link you ever did see |
| | | `medium` | **default**: Not quite as small as `small`, but not very big either |
| | | `large` | Now *that's* what I call a link! |
| `priority` | `string` | `primary` | Call-to-action :telephone: |
| | | `secondary` | **default**: Run of the mill, garden variety  |
| | | `tertiary` | Low-key, subdued  |


## Examples

### Primary small
```handlebars
{{#frost-link
  'routename'
  priority='primary'
  size='small'
}}
  <div class='text'>Primary</div>
{{/frost-link}}
```

### Font based on size
```handlebars
{{#frost-link
  'routename'
  priority='tertiary'
}}
  <div class='text'>Tertiary</div>
{{/frost-link}}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-link.git
cd ember-frost-link
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-link/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
