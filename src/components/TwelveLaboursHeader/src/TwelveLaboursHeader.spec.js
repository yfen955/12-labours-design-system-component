import { mount, createLocalVue  } from '@vue/test-utils'
import TwelveLaboursHeader from './TwelveLaboursHeader'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('TwelveLaboursHeader', () => {

  const wrapper = mount(TwelveLaboursHeader, {
    localVue,
    router,
    stubs: ['el-input', 'el-option', 'el-select', 'svgicon'],
    propsData: {
      linkComponent: "router-link"
    }
  })

  it('check-header', async () => {
    const header__nav = wrapper.find('.header__nav--main')
    expect(header__nav.exists()).toBe(true)
  })

  it('check-links', async () => {
    const link = wrapper.find('.nav5')
    expect(link.exists()).toBe(true)
  })

})
