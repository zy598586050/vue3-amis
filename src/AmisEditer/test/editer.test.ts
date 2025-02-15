import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AmisEditer from '../src/editer.vue'

describe('测试编辑器组件', () => {
    it('渲染', () => {
        const wrapper = mount(AmisEditer)
        expect(wrapper.classes()).toContain('sss')
    })
})