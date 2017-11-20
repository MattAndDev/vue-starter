<template>
  <div :class="`booleanInput ${classes}`">
    <slot name="before"></slot>
    <fieldset class="booleanInput_field">
      <input ref="input" class="booleanInput_input" :type="type" :name="name" :id="id" v-model="checked">
      <label v-if="label" :class="`booleanInput_label booleanInput_label-${type}`" @click.prevent="_toggle" :for="id">{{label}}</label>
    </fieldset>
    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  name: 'boolean-input',
  props: {
    /**
    *  Extraclasses for style adaptions on include
    **/
    classes: {
      type: String, default: ''
    },
    /**
    *  The id for this input field, will be returned by getValue method
    **/
    id: {
      type: [String, Number], required: true
    },
    /**
    *  The name for this input field, important when dealing with radio
    **/
    name: {
      type: String, required: true
    },
    /**
    *  Type of the boolean input, has to match `['checkbox', 'radio']`
    **/
    type: {
      type: String,
      required: true,
      validator (value) {
        var allowed = ['checkbox', 'radio']
        return allowed.indexOf(value) >= 0
      }
    },
    /**
    *  Label for this boolean input
    **/
    label: {
      type: String,  required: true
    },
    /**
    *  Default value
    **/
    defaultValue : {
      type: Boolean, default: false
    }
  },
  data () {
    return {
      checked: this.defaultValue
    }
  },
  methods: {
    /**
    *  Change status of the boolean input
    *
    *  @returns {Boolean}
    *  @public
    */
    _toggle () {
      // toggle html propery checked
      this.$refs.input.checked = (this.$refs.input.checked) ? false : true
      // emit change event with curent value
      this.$emit('change', this)
      // return the value
      return this.$refs.input.checked
    },
    /**
    * Set state of boolean input
    *
    *  @public
    *  @returns {Boolean}
    */
    setState (state) {
      this.$refs.input.checked = state
    },
    /**
    * Returns status of boolean input
    *
    *  @public
    *  @returns {Boolean}
    */
    isChecked () {
      return this.$refs.input.checked
    },
    /**
    * Returns {id: value} for the boolean input field.
    *
    *  @public
    *  @returns {Object}
    */
    getValue () {
      let id = this.id
      return { id : this.$refs.input.checked }
    }
  }
}
</script>

<style lang="sass">
@import "./_boolean-input.sass"
</style>
