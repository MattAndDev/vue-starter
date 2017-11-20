# vue-starter

> vue-webpack tempalte with a bit of sugar

## Main gotchas

- vue-router `./src/router/index.js`
- vuex (store)  `./src/store.js`
- atomic component approach `./src/components/*`
- views to connect router logic to components `./src/views/*` together with their subviews
- configuration files for components `./src/data/*`

Builder and structure is partially based upon [vue template for webpack](http://vuejs-templates.github.io/webpack/)  at [this version](https://github.com/vuejs-templates/webpack/tree/1.1.2)

To fully make sense of the documentation a basic understanding of [webpack](https://webpack.js.org/) and [vue](vuejs.org) is required.
- [learn webpack](https://webpack.js.org/guides/getting-started/)
- [learn vue](https://vuejs.org/v2/guide/)
- ask [who wrote this readme](https://bitbucket.org/MattAndDev/)

## scripts

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run test

# start styleguide server (via vue-styleguidist)
npm run styleguide

# builds teh styleguide in the docs folder
npm run styleguide:build
