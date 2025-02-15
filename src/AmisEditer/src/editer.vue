<template>
    <iframe class="editor-iframe" :src="editorUrl" />
</template>

<script setup lang="ts">
const editorUrl = new URL('../../editer/index.html', import.meta.url).href
</script>

<script lang="ts">
export default {
  name: 'AmisEditer'
}
</script>

<style scoped lang="scss">
.editor-iframe {
    border: none;
    width: 100vw;
    height: 100vh;
}
</style>