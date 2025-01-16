import { type App, type Component } from 'vue'
import AmisRender from './AmisRender/index.vue'

export { AmisRender }

const components: Component[] = [AmisRender]

const install = (App: App) => {
    components.forEach(item => {
        App.component(item?.name || 'default', item)
    })
}

export default { install }