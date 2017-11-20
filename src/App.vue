<template>
  <div id="App" :class="`app `">
    <router-view/>
  </div>
</template>

<script>
import plugins from './plugins'
export default {
  name: 'app',
  mounted () {
  }
}
</script>

<style lang="sass">
// import base styles, once
@import "~@/assets/styles/_base.sass"
</style>
