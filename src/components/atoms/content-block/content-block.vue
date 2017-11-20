<template>
  <div v-if="isHtml" :class="'contentBlock ' + classes" v-html="content"></div>
  <p v-else :class="'contentBlock ' + classes">{{content}}</p>
</template>

<script>
export default {
  name: 'content-block',
  props: {
    classes: {
      type: String, default: ''
    },
    content: {
      type: String, required: true
    },
    isHtml: {
      type: Boolean, default: false
    }
  },
  mounted () {
  }
}
</script>

<style lang="sass">
@import "./_content-block.sass"
</style>
