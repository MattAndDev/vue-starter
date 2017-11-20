<template>
  <a v-if="type === 'external'" :href="href" :class="`anchor ${classes}`">{{value}}</a>
  <router-link :to="href"  v-else-if="type === 'internal'" :class="`anchor ${classes}`">{{value}}</router-link>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'anchor',
  props: {
    /**
      Extraclasses for style adaptions on include
    **/
    classes: {
      type: String, default: ''
    },
    /**
      Type of anchor `['internal', 'external']` -> `['<router-link>', '<a>']`
    **/
    type: {
      type: String, default: 'internal'
    },
    /**
      Wording for this anchor link
    **/
    value: {
      type: String, required: true
    },
    /**
      Href attribute for the anchor
    **/
    href: {
      type: String, default: '', required: true, description: 'The href attribute of the anchor'
    }
  }
}
</script>

<style lang="sass">
@import "./_anchor.sass"
</style>
