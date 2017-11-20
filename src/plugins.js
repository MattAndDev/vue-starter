import Vue from 'vue'
import windowConfig from './plugins/window-config'
function plugins () {
  require('normalize.css')
  Vue.use(windowConfig)
}

export default plugins()
