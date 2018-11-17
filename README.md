# Example Build System [![Build Status](https://travis-ci.org/oakmac/example-build-system.svg?branch=master)](https://travis-ci.org/oakmac/example-build-system)

This repo contains a simple build + [Travis CI] setup appropriate for a simple website.

It uses [npm scripts] (located in the `package.json` file under the `"scripts"` key) with
some basic tools like [UglifyJS], [StandardJS] and [onchange].

#### First-time Setup

```sh
npm install
```

#### Create a build

The build uses [UglifyJS] to concatenate and then minify all of the files located
in the `src-js/` folder. It creates the `public/js/app.js` file (which is ignored by git).

```sh
npm run build
```

#### Test System

Tests for [StandardJS] compliance for all files located in `src-js/`. A simple `travis.yml`
file is included to run your tests on [Travis CI].

```sh
npm run test
```

#### Watch files for development

Watch for file changes in the `src-js/` folder while developing and automatically
build `public/js/app.js`.

```sh
npm run watch
```

## License

[ISC License](LICENSE.md)

[npm scripts]:https://scotch.io/tutorials/using-npm-as-a-build-tool
[Travis CI]:https://travis-ci.org/
[UglifyJS]:https://github.com/mishoo/UglifyJS2/tree/harmony
[StandardJS]:https://standardjs.com/
[onchange]:https://github.com/Qard/onchange
