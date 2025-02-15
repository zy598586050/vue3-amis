<template>
    <div id="amisRoot"></div>
</template>

<script setup lang="ts">
import '../../sdk/sdk.css'
import '../../sdk/helper.css'
import '../../sdk/iconfont.css'

const props = defineProps(['option'])
const emit = defineEmits(['onError'])

import('../../sdk/sdk.js' as string).then(() => {
  import('../../sdk/rest.js' as string).then(() => {
    const amis = (window as any).amisRequire('amis/embed')
    amis.embed('#amisRoot', props.option)
  })
}).catch(() => {
  console.warn('amis sdk加载失败')
  emit('onError')
})
</script>

<script lang="ts">
export default {
  name: 'AmisRender'
}
</script>