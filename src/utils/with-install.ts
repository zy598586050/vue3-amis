import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T extends { name: string }>(com: T) => {
    (com as SFCWithInstall<T>).install = (app: App) => {
        app.component(com.name, com as SFCWithInstall<T>)
    }
    return com as SFCWithInstall<T>
}