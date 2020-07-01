import { mount } from '@vue/test-utils'
import User from '@/views/User.vue'
import EditProfile from '@/views/EditProfile.vue'

describe('Component', () => {
    // Now mount the component and you have the wrapper
    // const wrapper = mount(User)


    test('EditProfile renders correctly', () => {
        const wrapper = mount(EditProfile)
        expect(wrapper.element).toMatchSnapshot()
    })
})