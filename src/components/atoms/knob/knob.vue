<template>
  <span v-if="type === 'span'" :class="'knob ' + classes">
    <span ref="text" class="knob_text">{{value}}</span>
    <span ref="loader" class="knob_loader"></span>
  </span>
  <a v-else-if="type === 'link'" href=""  :class="'knob ' + classes">
    <span ref="text" class="knob_text">{{value}}</span>
    <span ref="loader" class="knob_loader"></span>
  </a>
  <router-link v-else-if="type === 'internal'" :to="{ name: href }"  :class="'knob ' + classes">
    <span ref="text" class="knob_text">{{value}}</span>
    <span ref="loader" class="knob_loader"></span>
  </router-link>
  <button v-else-if="type === 'button'" name="button" :class="'knob ' + classes">
    <span ref="text" class="knob_text">{{value}}</span>
    <span ref="loader" class="knob_loader"></span>
  </button>
  <span v-else-if="type === 'submit'" @click.prevent="" :class="'knob ' +  loadingClass + classes">
    <input ref="text"  class="knob_text" type="submit" :value="value" />
    <span ref="loader" class="knob_loader"></span>
  </span>

</template>

<script>
import Vue from 'vue'

export default {
  name: 'knob',
  props: {
    classes: {
      type: String, default: ''
    },
    type: {
      type: String, default: 'span', required: true
    },
    value: {
      type: String, default: 'Submit'
    },
    modifier: {
      type: String, default: ''
    },
    href: {
      type: String, default: ''
    },
    loadingText: {
      type: String, default: ''
    }
  },
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    if (this.modifier) this.$el.classList.add(`knob-${this.modifier}`)
  },
  computed: {
    loadingClass: function () {
      let className = (this.isLoading) ? 'is-loading' : ''
      return className
    }
  }
}
</script>

<style lang="sass">
@import "./_knob-styles.sass"
</style>
