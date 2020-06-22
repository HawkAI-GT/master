import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/SignUpForm.vue'

describe('SignUpForm.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Registrarse'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
