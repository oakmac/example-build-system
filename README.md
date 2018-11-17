# Example Build System [![Build Status](https://travis-ci.org/oakmac/example-build-system.svg?branch=master)](https://travis-ci.org/oakmac/example-build-system)

This repo contains a simple build + travis-ci setup appropriate for a simple website.

It uses only [npm scripts] with some basic tools like [UglifyJS], [StandardJS] and [watchify].

[npm scripts]:https://scotch.io/tutorials/using-npm-as-a-build-tool
[UglifyJS]:https://github.com/mishoo/UglifyJS
[StandardJS]:https://standardjs.com/
[watchify]:https://github.com/browserify/watchify

#### First-time Setup

```sh
npm install
```

#### Create a build

The build uses [UglifyJS] to concatenate and then minify all of the files located
in the `src-js/` folder. It creates `public/js/app.js` (which is ignored by git).

```sh
npm run build
```

#### Test System

#### Watchify

## License

[ISC License](LICENSE.md)
