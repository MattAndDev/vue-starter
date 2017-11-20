import Vue from 'vue'
import Anchor from './anchor'
import router from '@/router'
describe('anchor.vue', () => {
  describe('mounts with external link', () => {
    // Vue.use(router)
    const Constructor = Vue.extend(Anchor)
    const vm = new Constructor({
      propsData: {
        value: 'Test anchor innerHTML',
        type: 'external',
        classes: 'test-extra-class',
        href: 'http://www.example.org',
      },
      router
    }).$mount()
    it('has href attribute with correct value', () => {
      expect(vm.$el.getAttribute('href')).to.equal('http://www.example.org')
    })
    it('has correct wording', () => {
      expect(vm.$el.textContent).to.equal('Test anchor innerHTML')
    })
    it('has correct extra classes', () => {
      expect(vm.$el.classList.contains('test-extra-class')).to.equal(true)
    })
  })
  describe('mounts with internal link <router-link>', () => {
    // Vue.use(router)
    const Constructor = Vue.extend(Anchor)
    const vm = new Constructor({
      propsData: {
        value: 'Test anchor innerHTML',
        type: 'internal',
        classes: 'test-extra-class',
        href: '/profile',
      },
      router
    }).$mount()
    it('has href attribute with correct value', () => {
      expect(vm.$el.getAttribute('href')).to.equal('/profile')
    })
    it('has correct wording', () => {
      expect(vm.$el.textContent).to.equal('Test anchor innerHTML')
    })
    it('has correct extra classes', () => {
      expect(vm.$el.classList.contains('test-extra-class')).to.equal(true)
    })
  })
})
