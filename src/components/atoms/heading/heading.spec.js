import Vue from 'vue'
import Heading from './heading'
describe('heading.vue', () => {
  const Constructor = Vue.extend(Heading)
  const testProps = {
    classes: 'test-extra-class',
    type: 'h1',
    fake: 'span'
  }
  const vm = new Constructor({propsData: testProps}).$mount()
  it('has correct extra classes', () => {
    expect(vm.$el.classList.contains(testProps.classes)).to.equal(true)
  })
  it('has wrapped in <span>', () => {
    expect(vm.$el.tagName).to.equal('SPAN')
  })
  it('allows props to be changed', () => {
    vm.fake = 'p'
    vm.type = 'h2'
    it('changes wrapper to <p> based on props fake', () => {
      expect(vm.$el.tagName).to.equal('P')
    })
    it('changes class based on props "type"', () => {
      expect(vm.$el.classList.contains('heading-h2')).to.equal(true)
    })
  })
  describe('validates props "type" and "fake"', () => {
    before(function () { sinon.stub(console, 'error') })
    after(function () { console.error.restore() })
    const Constructor = Vue.extend(Heading)
    const testProps = {
      classes: 'test-extra-class',
      // those shoudl throe 2 validation errors
      type: 'not-existing-type',
      fake: 'unfakable'
    }
    it('throws 2 errors when props type and fake do not match expected values', () => {
      // mount and catch double error
      const vm = new Constructor({propsData: testProps}).$mount()
      expect( console.error.calledTwice ).to.be.true
    })
  })


})
