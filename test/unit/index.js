import Vue from 'vue'
import "es6-promise/auto"
Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('../../src/components', true, /\.spec.js$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// ignoring also md files used for styleguide
const srcContext = require.context('../../src', true, /^\.\/((?!main(\.js)?|(\.md)+)$)/)
srcContext.keys().forEach(srcContext)
