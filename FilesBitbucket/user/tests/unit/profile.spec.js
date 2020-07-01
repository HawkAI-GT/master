import { mount } from '@vue/test-utils'
import User from '@/views/User.vue'
import EditProfile from '@/views/EditProfile.vue'
import UserInfo from "../components/UserInfo";
import ButtonEdit from "../components/ButtonEdit";
import AccountInfo from "../components/AccountInfo";
import Support from "../components/Support";
import BottomNav from "../components/BottomNav";


describe('Component', () => {
    // Now mount the component and you have the wrapper
    // const wrapper = mount(User)

    test('UserInfo is a Vue instance?', () => {
        const wrapper = mount(UserInfo)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('ButtonEdit is a Vue instance?', () => {
        const wrapper = mount(ButtonEdit)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('AccountInfo is a Vue instance?', () => {
        const wrapper = mount(AccountInfo)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('Support is a Vue instance?', () => {
        const wrapper = mount(Support)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('BottomNav is a Vue instance?', () => {
        const wrapper = mount(BottomNav)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    /*
    test('EditProfile renders correctly', () => {
        const wrapper = mount(EditProfile)
        expect(wrapper.element).toMatchSnapshot()
    })
    */
})