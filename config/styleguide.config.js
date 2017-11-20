module.exports = {
  webpackConfig: require('../build/webpack.prod.conf.js'),
  components: '../src/components/atoms/**/*.vue',
  require: [
    './src/assets/styles/_base.sass',
    // './node_modules/normalize.css/normalize.css',
  ],
  vuex: '../src/store.js',
  styleguideDir: '../styleguide',
  mixins: [
    '../src/plugins.js',
    {
     created() {
       console.log('component created')
     }
   }
  ]
};
