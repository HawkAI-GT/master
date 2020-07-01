import { mount } from '@vue/test-utils'
import Login from '@/views/Login'
import LoginBackground from '@/components/LoginBackground'
import FacebookLoginButton from '@/components/FacebookLoginButton'

describe('Component', () => {
    test('Login is a Vue instance?', () => {
        const wrapper = mount(Login)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('LoginBackground is a Vue instance?', () => {
        const wrapper = mount(LoginBackground)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('FacebookLoginButton is a Vue instance?', () => {
        const wrapper = mount(FacebookLoginButton)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    /*
    test('Login renders correctly', () => {
        const wrapper = mount(Login)
        expect(wrapper.element).toMatchSnapshot()
    })
    test('LoginBackground renders correctly', () => {
        const wrapper = mount(LoginBackground)
        expect(wrapper.element).toMatchSnapshot()
    })
    test('FacebookLoginButton renders correctly', () => {
        const wrapper = mount(FacebookLoginButton)
        expect(wrapper.element).toMatchSnapshot()
    })
    */
})