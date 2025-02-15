<template>
  <h1>Amis组件展示</h1>
  <nav class="nav">
    <router-link to="/">渲染器</router-link>
    <router-link to="/editer">编辑器</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped lang="scss">

h1 {
  text-align: center;
  font-weight: 200;
}

.nav {
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
}
</style>