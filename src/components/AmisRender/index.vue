<template>
    <div id="amisRoot"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps(['option'])
const emit = defineEmits(['onError'])

const loadStyles = (styles: string[]) => {
    for (const path of styles) {
        const style = document.createElement('link')
        style.setAttribute('rel', 'stylesheet')
        style.setAttribute('type', 'text/css')
        style.setAttribute('href', path)
        document.head.appendChild(style)
    }
}

const loadSDK = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        loadStyles([''])
        const script = document.createElement('script')
        script.setAttribute('type', 'text/javascript')
        script.setAttribute('src', '')
        script.onload = () => resolve()
        script.onerror = () => reject()
        document.body.appendChild(script)
    })
}

onMounted(() => {
    loadSDK().then(() => {
        const amis = (window as any).amisRequire('amis/embed')
        amis.embed('#amisRoot', props.option)
    }).catch(() => {
        console.warn('amis sdk加载失败')
        emit('onError')
    })
})
</script>