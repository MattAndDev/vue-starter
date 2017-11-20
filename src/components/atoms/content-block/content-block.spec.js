import Vue from 'vue'
import ContentBlock from './content-block'
describe('content-block.vue', () => {
  const Constructor = Vue.extend(ContentBlock)
  const testProps = {
    content: 'Testing <a href="">html</a>',
    classes: 'test-extra-class',
    isHtml: true
  }
  const vm = new Constructor({propsData: testProps}).$mount()
  it('has correct HTML content', () => {
    expect(vm.$el.innerHTML).to.equal(testProps.content)
  })
  it('has correct extra classes', () => {
    expect(vm.$el.classList.contains(testProps.classes)).to.equal(true)
  })
})
