 <template>
   <div :class="`content-wrapper ${classes} ${modifiers}`">
    <slot></slot>
  </div>
 </template>


<script>
export default {
  name: 'content-wrapper',
  props: {
    /**
    *  Extraclasses for style adaptions on include
    **/
    classes: {
      type: String, default: ''
    },
    /**
    *  Until modifier to block responsiveness
    *  Allowed values `['xs', 'sm', 'md', 'lg']`
    **/
    until: {
      type: [String, Boolean],
      default: false,
      validator (value) {
        if (value === false) return true
        var allowed = ['xs', 'sm', 'md', 'lg']
        return allowed.indexOf(value) >= 0
      }
    },
    /**
    *  Above modifier to debounce responsiveness
    *  Allowed values `['xs', 'sm', 'md', 'lg']`
    **/
    above: {
      type: [String, Boolean],
      default: false,
      validator (value) {
        if (value === false) return true
        var allowed = ['xs', 'sm', 'md', 'lg']
        return allowed.indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      modifiers: String
    }
  },
  mounted () {
    let modifiers = []
    if (this.until) {
      modifiers.push(`until-${this.until}`)
    }
    if (this.above) {
      modifiers.push(`above-${this.above}`)
    }
    this.modifiers = modifiers.toString().replace(',', ' ')
  }

}
</script>

<style lang="sass">
// core
@import "~@/assets/styles/_main.sass"
// build default classes properties
@import "./_content-wrapper-builder.scss"
+content-wrapper-builder()
</style>
