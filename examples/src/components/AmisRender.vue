<template>
  <AmisRender :option="option"></AmisRender>
</template>

<script setup lang="ts">
// import { AmisRender } from '../../../src/index'
import { AmisRender } from 'vue3-amis'
import 'vue3-amis/dist/index.css'
const option = {
  "type": "page",
  "body": {
    "type": "form",
    "title": "custom 组件",
    "body": [
      {
        "type": "input-text",
        "name": "username",
        "label": "姓名"
      },
      {
        "name": "username",
        "type": "custom",
        "label": "自定义组件",
        "onMount": "const button = document.createElement('button'); button.innerText = '点击修改姓名'; button.onclick = event => { onChange('new name', 'username'); event.preventDefault(); }; dom.appendChild(button);"
      }
    ]
  }
}
</script>