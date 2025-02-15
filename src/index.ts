import AmisEditer from './AmisEditer/src/editer.vue'
import AmisRender from './AmisRender/src/render.vue'

import type { App } from 'vue'

const components = [AmisEditer, AmisRender]

const install = (app: App) => {
    components.forEach((component) => {
        app.component(component.name as string, component)
    })
}

export default { install }
export { AmisEditer, AmisRender }