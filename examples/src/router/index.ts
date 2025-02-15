import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'render',
            component: () => import('../components/AmisRender.vue'),
          },
          {
            path: '/editer',
            name: 'editer',
            component: () => import('../components/AmisEditer.vue'),
          }
    ]
})

export default router
