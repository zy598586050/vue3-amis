<template>
  <AmisRender :option="option" />
</template>

<script setup lang="ts">
import { AmisRender } from './components/index.ts'

const option = {
  type: 'page',
  title: '表单页面',
  body: {
    type: 'form',
    mode: 'horizontal',
    api: '/saveForm',
    body: [
      {
        label: 'Name',
        type: 'input-text',
        name: 'name'
      },
      {
        label: 'Email',
        type: 'input-email',
        name: 'email'
      }
    ]
  }
}
</script>