# BlaBlaCar React component library
[![Build Status](https://travis-ci.org/blablacar/ui-library.svg?branch=master)](https://travis-ci.org/blablacar/ui-library)
[![npm version](https://img.shields.io/npm/v/@blablacar/ui-library.svg)](https://www.npmjs.com/package/@blablacar/ui-library)

## Installation
BlaBlaCar `ui-library` is available as an [npm package](https://www.npmjs.com/package/@blablacar/ui-library)

Just run this inside your project
```bash
npm i @blablacar/ui-library
```

## Usage
Import the package into your `package.json`
```
"dependencies": {
    ...
    "@blablacar/ui-library": "<CURRENT_VERSION>",
    ...
}
```
then all you need to do is:
```javascript
import { Button, Input } from '@blablacar/ui-library'
```
But again, don't forget that you need to have React to make it work.


For server-rendering purposes, just use the `flushToHTML` from styled-jsx that we export from the `ui-library`
```javascript
import { flushToHTML } from '@blablacar/ui-library'

const index = `
  <!doctype html>
  <html>
    <head>
      ${title}
      ${flushToHTML()}
    </head>
    ...
  </html>
`
```
For more information, see directly the [styled-jsx documentation](https://github.com/zeit/styled-jsx#server-side-rendering)

## Changelog
Check the [changelog](https://github.com/blablacar/ui-library/blob/master/CHANGELOG.md) to stay informed on all updates

## Examples and documentation
You can find examples and tech documentation [here](https://blablacar.github.io/ui-library/).

## Contributing
Wanna contribute ? [This way.](https://github.com/blablacar/ui-library/blob/master/CONTRIBUTING.md) :)

## License
This project is licensed under the terms of the [MIT license](https://github.com/blablacar/ui-library/blob/master/LICENSE).
