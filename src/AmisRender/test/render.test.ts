import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AmisRender from '../src/render.vue'

describe('测试渲染器组件', () => {
    it('渲染', () => {
        const wrapper = mount(AmisRender)
        expect(wrapper.classes()).toContain('sss')
    })
})