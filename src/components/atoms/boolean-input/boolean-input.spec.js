import Vue from 'vue'
import BooleanInput from './boolean-input'
describe('boolean-inut.vue', () => {

  // check that the allowed types are mountign correctly
  const types = ['checkbox', 'radio']
  // for all types
  for (var i = 0; i < types.length; i++) {
    describe(`mounts as ${types[i]}`, () => {
      // dynamic testing props
      const testProps = {
        type: types[i],
        name: types[i],
        classes: 'test-extra-class',
        id: 'uniqueId',
        label: '  A checkbox label'
      }

      // Mount with props
      const Constructor = Vue.extend(BooleanInput)
      const vm = new Constructor({propsData: testProps}).$mount()

      // test mounted input type
      it(`has input type ${types[i]}`, () => {
        expect(vm.$el.querySelector('input').getAttribute('type')).to.equal(testProps.type)
      })

      // test label consistency
      it('has correct label wording', () => {
        expect(vm.$el.querySelector('label').textContent).to.equal(testProps.label)
      })

      // test isChecked method
      it('"isChecked" method returns false on mount', () => {
        expect(vm.isChecked()).to.equal(false)
      })

      // test toggle method
      it('"isChecked" returns true after firing "toggle" method', () => {
        vm.toggle()
        expect(vm.isChecked()).to.equal(true)
      })

      // test getValue method
      it('"getValue" returns correct {id : value} Object', () => {
        let id = testProps.id
        expect(vm.getValue()).to.eql({ id: true })
      })
    })
  }

  // test the custom validation for the type prop
  describe('validates prop "type"', () => {
    before(function () { sinon.stub(console, 'error') })
    after(function () { console.error.restore() })
    const Constructor = Vue.extend(BooleanInput)
    // wrong props
    const wrongProps = {
      // This is the prop that will cause an error
      type: 'invalid-type',
      name: '',
      classes: 'test-extra-class',
      id: 'uniqueId',
      label: 'A checkbox label'
    }
    // test the emitted error
    it('throws 1 error when prop "type" is not matching expected values', () => {
      const vm = new Constructor({propsData: wrongProps}).$mount()
      expect(console.error.calledOnce).to.be.true
    })
  })
})
