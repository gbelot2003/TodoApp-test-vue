import { shallowMount } from "@vue/test-utils";
import Message from "@/components/Message";

describe('Message.vue', () => {
    it('render props.mgs when passed', () => {
        const wrapper = shallowMount(Message, {
            props: {
                msg: "Hello Friends"
            }
        })
        expect(wrapper.text()).toContain("Hello Friend")
    })
})