# babel-template

A simple template repo for using babel to write ES6 (AKA ES2015) code. I got tired of having to try and copy/paste from previous repos, and/or search for what I need on google. You can easily create a new repo by using the Template button within github (instead of cloning). This will give you a new repo with a copy of all of the files, and your origin already set, etc.

## Getting started

There isn't a whole lot here. You might want to use this to start building an [express](https://expressjs.com) API, for example. In that case, perhaps you should consider modifying `src/index.js` to spin up an express server:

```
import express from 'express';
import log from 'llog';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => log.info(`Example app listening at http://localhost:${port}`));
```

I mostly built this up to be a small enough template that you can take it and run with it, but also to provide some simple examples for linting, testing, and even running in the VSCode debugger. Additional libraries can be added (maybe you prefer `yarn` over `npm`, or maybe you want to use `fastify` instead of `express`, etc.). You can also modify the configuration to prefer stricter linting, etc.

## Configuration choices

### npm

I stuck with `npm` by default. In general, I don't have much of a preference as I think `npm` works pretty well these days. If you wish to use `yarn`, feel free to install and use it instead. Here are the default npm scripts:

- build:
  - Used to transpile the ES6 syntax to ES5 JavaScript.
  - Runs `babel -d dist/ src`
- lint:
  - Used to look for lint errors in your `src` and `tests` directories.
  - Runs `eslint src tests`
- lint-fix:
  - Used to automatically fix lint errors in your `src` and `tests` directories.
  - Runs `eslint --fix src tests`
-start:
  - Used to start your src/index.js file in a way that's suitable for local development.
  - Runs `nodemon --exec babel-node src/index.js --watch src --watch node_modules` to run your server via nodemon, but also watch for changes and automatically restart when changes are made.
- start-prod:
  - Used to start your transpiled index.js file for use in production (perhaps inside of a built Docker image).
  - Runs `node dist/index.js`
- test:
  - Runs `jest --coverage` to execute jest tests and provide code coverage information.

### babel

This isn't TypeScript, but via babel you can still get a bunch of the latest ECMAScript goodies. VSCode can assist you with auto-generating JSDocs (just type `/**` prior to your function and press enter). Additionally, if you fill in the documentation with type information, then VSCode can offer some type safety by warning you when unexpected/invalid types are passed to a function.

### eslint

I stuck with `eslint:recommended` to catch some errors, but not be overly pedantic. Feel free to change it to something more strict if you wish ([eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), for example). The additional changes I made on top of `eslint:recommended` are as follows (and can be changed by modifying `.eslintrc`):
 - semicolons are required
 - `prettier` is used as a formatting tool, so we also extend `plugin:prettier/recommended`


### prettier

It's effectively a default prettier configuration, expect that lines are allowed to be up to 120 characters in length. I think 80 is much too small for any modern screen. 100 is much more reasonable, and I think 120 is even more so. This can easily be changed by modifying the value in `.prettierrc.json`.

### logging

Logging is simple and straightforward, leveraging [pino](https://www.npmjs.com/package/pino), with [llog](https://www.npmjs.com/package/llog) as a wrapper. Whenever you need logging:
- At the top of your file simply `import log from 'llog';`
- At any other point in your file feel free to call `log.info()`, `log.debug()`, etc.

The llog library will use the `LOG_LEVEL` environment variable to determine which messages to output.

### jest

We're leveraging the [jest](https://jestjs.io) library for testing. The code coverage flag is enabled by default, but if you want different behavior simply modifying the package.json and/or add your own jest config. Some example tests are contained within, as you may want to refresh yourself on how to mock a named export versus a default export.

## Recommended VSCode plugins

- ESLint
- GitLens
- Jest
- Markdown Preview Github Styling
- Prettier
