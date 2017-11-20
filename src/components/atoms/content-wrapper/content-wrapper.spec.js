import Vue from 'vue'
import ContentWrapper from './content-wrapper'
describe('content-wrapper.vue', () => {
  const Constructor = Vue.extend(ContentWrapper)
  const testProps = {
    classes: 'test-extra-class',
    above: 'sm',
    until: 'md'
  }
  const vm = new Constructor({propsData: testProps}).$mount()
  it('has correct modifiers', () => {
    expect(vm.$el.classList.contains(`above-${testProps.above}`)).to.equal(true)
    expect(vm.$el.classList.contains(`until-${testProps.until}`)).to.equal(true)
  })
  it('has correct extra classes', () => {
    expect(vm.$el.classList.contains(testProps.classes)).to.equal(true)
  })
  describe('validates props until an above', () => {
    before(function () { sinon.stub(console, 'error') })
    after(function () { console.error.restore() })
    const Constructor = Vue.extend(ContentWrapper)
    const testProps = {
      classes: 'test-extra-class',
      // those shoudl throe 2 validation errors
      until: 'sma',
      above: '---'
    }
    it(`Should error twice with props above and below not matching exactly ['xs, 'sm', 'md', 'lg']`, () => {
      // mount and catch double error
      const vm = new Constructor({propsData: testProps}).$mount()
      expect( console.error.calledTwice ).to.be.true
    })
  })


})
