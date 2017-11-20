<!--
  text input atom component
  //
  manages all input fields of type text
  //
  classes: String
  content: String (you can pipe html)
  fake: String one-of ['p', 'span']
  type: String one-of ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
 -->
<template>
  <fieldset class="textInput">
    <label v-if="label" class="textInput_label" :for="id">{{label}}<span class="textInput_label_optional">{{isOptional}}</span></label>
    <span v-if="type === 'password' " :class="'textInput_field_icon_password ' + passwordIconClass">
      <icon @click.native="togglePasswordVisibility" icon-name="input-text-passowrd-display" classes="textInput_field_icon_password-svg"></icon>
    </span>
    <input class="textInput_field" v-if="!isTextArea" ref="field" type="text" :name="id" :value="value" :placeholder="placeholder">
    <textarea class="textInput_field-textarea" v-else ref="field" :name="id" :value="value" :placeholder="placeholder"></textarea>
    <span class="textInput_error">{{errorMessage}}</span>
  </fieldset>
</template>

<script>
import Icon from '@/components/atoms/icon/icon'

export default {
  name: 'text-input',
  components: {
    Icon
  },
  props: {
    classes: {
      type: String, default: ''
    },
    id: {
      type: String
    },
    type: {
      type: String, default: 'text', required: true
    },
    required: {
      type: Boolean, default: false
    },
    label: {
      type: String
    },
    placeholder: {
      type: String, required: false, default: ''
    },
    value: {
      type: [String, Number], required: false, default: ''
    },
    errorEmpty: {
      type: String, default: 'Please fill this field'
    },
    errorInvalid: {
      type: String, default: 'Please provide a valid value for this field'
    },
    optionalText: {
      type: String, default: 'optional'
    },
    isTextArea: {
      type: Boolean, required: false, default: false
    }
  },
  data () {
    return {
      passwordIconClass: 'show',
      showPassword: false,
      errorMessage: ''
    }
  },
  // on rute change, reset 💪
  watch: {
    '$route' (to, from) {
      this.$refs.field.value = ''
      this.$refs.field.type = this.type
    },
  },
  mounted () {
    // available input types
    const availableTypes = [
      'alphanumeric', 'nonnumeric', 'numeric', 'zip', 'phone', 'email', 'password', 'iban', 'bic'
    ]
    if (this.type === 'password') this.$refs.field.setAttribute('type', 'password')
    if (availableTypes.indexOf(this.type) === -1) {
       throw new Error(`Type ${this.type} is not supported from component text-input`)
    }
    this.regex = {
      // TODO: add regex
      // done
      alphanumeric: /\d+/,
      nonnumeric: /^([? ]*[A-Za-z0-9\-.\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]{2,}[? ]*)+$/,
      numeric: /^\d+$/,
      zip: /^(\d\/?-?\s?){5}$/,
      bic: /^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$/,
      email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      phone: /^([? ]*[?+]{0,1}[? ]*[0-9?(?)?/?-]{1,10}[? ]*){7,}$/,
      // TODO
      iban: /^DE([0-9a-zA-Z]\s?){20}$/,
      password: /^.{8,}$/
    }
  },
  methods: {
    isValid: function () {
      // fi field is not required and no input is given, validate
      if (!this.required && !this.$refs.field.value.length) return true
      // check that we have a validation regex
      if (!this.regex[this.type]) console.error(`No validation for field text type ${this.type} in input-text component`)
      // test field value against regex
      let valid = this.$refs.field.value.match(this.regex[this.type])
      let isEmpty = this.$refs.field.value.length ? false : true
      // show hide error depending on result
      let displayError = (!valid) ? this.showError(isEmpty) : this.removeError()
      // formatting meessage
      let validString = (valid) ? 'valid' : 'invalid'
      console.info(`Field with id ${this.id} of type ${this.type} is ${validString}`)
      // return validation result
      return valid
    },
    getValue: function (){
      return this.$refs.field.value
    },
    showError: function (isEmpty) {
      this.$el.classList.add('has-error')
      this.errorMessage = (isEmpty) ? this.errorEmpty : this.errorInvalid
    },
    removeError: function () {
      this.$el.classList.remove('has-error')
      this.errorMessage = ''
    },
    togglePasswordVisibility: function () {
      if (!this.showPassword) {
        this.showPassword = true
        this.passwordIconClass = 'hide'
        this.$refs.field.setAttribute('type' , 'text')
      }
      else {
        this.showPassword = false
        this.passwordIconClass = 'show'
        this.$refs.field.setAttribute('type' , 'password')
      }
    }
  },

  computed: {
    isOptional: function () {
      let optionalText = this.required ? '' : this.optionalText
      return optionalText
    }
  }
}
</script>

<style lang="sass">
@import "./_text-input-styles.sass"
</style>
