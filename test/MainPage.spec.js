import { mount } from '@vue/test-utils'
import Page from '@/pages/index.vue'

describe('Page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Page)
    expect(wrapper.vm).toBeTruthy()
  })
})
