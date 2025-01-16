import { type App, type Component } from 'vue'
import AmisRender from './AmisRender/index.vue'

// 明确声明组件的类型
export { AmisRender }

// 声明组件类型数组
const components: Component[] = [AmisRender]

const install = (App: App) => {
    components.forEach(item => {
        App.component(item?.name || 'default', item)
    })
}

export default { install }