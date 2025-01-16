<template>
  <div id="amisRoot"></div>
</template>

<script setup lang="ts">
import('../../sdk/sdk.css')
import('../../sdk/helper.css')
import('../../sdk/iconfont.css')

const props = defineProps(['option'])
const emit = defineEmits(['onError'])

// @ts-ignore
import('../../sdk/sdk.js').then(() => {
  // @ts-ignore
  import('../../sdk/rest.js').then(() => {
    const amis = (window as any).amisRequire('amis/embed')
    amis.embed('#amisRoot', props.option)
  })
}).catch(() => {
  console.warn('amis sdk加载失败')
  emit('onError')
})
</script>