import { mount } from '@vue/test-utils'
import User from '@/views/User.vue'
import EditProfile from '@/views/EditProfile.vue'

describe('Component', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(User)

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<div class="v-card__subtitle pb-0">Account Information</div>')
    }),

        test('EditProfile renders correctly', () => {
            const wrapper = mount(EditProfile)
            expect(wrapper.element).toMatchSnapshot()
        })
})