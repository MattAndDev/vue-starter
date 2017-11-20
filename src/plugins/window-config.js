// =======================================================================
// windowConfig.js
// =======================================================================
// Basic class to store global data and manage dom wide events
// =======================================================================

// Importing libs
import Vue from 'vue'

// windowConfig class
class WindowConfig {

  constructor () {
    // Initialises all properties
    this.init()
    // Add event listeners to update properties
    this.addEventListeners()
  }

  // Initialises all properties
  init () {
    // window size
    this.window = {
      x: window.innerWidth || 0,
      y: window.innerHeight || 0
    }
    // window scroll
    this.scroll = {
      x: window.pageXOffset || 0,
      y: window.pageYOffset || 0
    }
    // Is touch flag
    this.isTouch = !!(('ontouchstart' in window) || (window.navigator && window.navigator.msPointerEnabled && window.MSGesture) || (window.DocumentTouch && document instanceof DocumentTouch))
    // Mouse position
    this.mouse = {
      x: 0,
      y: 0
    }
    let html = document.querySelector('html')
    // Mapping events
    if (this.isTouch) {
      html.classList.add('touch')
      this.events = {
        click: 'click',
        hoverTouch: 'click',
        mouseenter: 'touchstart',
        mouseleave: 'touchend',
        mousedown: 'touchstart',
        mouseup: 'touchend',
        mousemove: 'touchmove',
        hover: 'touchstart'
      }
    }
    else {
      html.classList.add('no-touch')
      this.events = {
        click: 'click',
        hoverTouch: 'mouseenter',
        mouseenter: 'mouseenter',
        mouseleave: 'mouseleave',
        mousedown: 'mousedown',
        mouseup: 'mouseup',
        mousemove: 'mousemove',
        hover: 'hover'
      }
    }

  }

  // Add event listener via throttleEventListener
  // and propagates events
  addEventListeners () {

    // scroll
    let onScroll = (e) => {
      this.scroll.x = window.pageXOffset || 0
      this.scroll.y = window.pageYOffset || 0
      let event = new Event('scroll-update')
      window.dispatchEvent(event)
    }
    this.throttleEventListener('scroll', onScroll)

    // resize
    let onResize = (e) => {
      this.window.x = window.innerWidth || 0
      this.window.y = window.innerHeight || 0
      // emit the resize event
      let event = new Event('resize-update')
      window.dispatchEvent(event)
    }
    this.throttleEventListener('resize', onResize)

    // mousemove
    let onMouseMove = (e) => {
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
      // emit the mousemove event
      let event = new CustomEvent('mouse-update', {event: e})
      window.dispatchEvent(event)
    }
    this.throttleEventListener('mousemove', onMouseMove)

  }

  // throttle event listener with raf
  throttleEventListener (eventType, callback) {
    let throttling = false
    const cb = (e) => {
      if (throttling) return
      throttling = true
      window.requestAnimationFrame(() => {
        callback(e)
        throttling = false
      })
    }
    window.addEventListener(eventType, cb)
  }

}

// Vue pluginise
const windowConfig = {
  install: (Vue) => {
    Vue.windowConfig = new WindowConfig()
  }
}



export default windowConfig
