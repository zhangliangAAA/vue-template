<template>
  <div class="nestRouter">
    <h1>以下是嵌套路由：</h1>
    <div class="child">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nestRouter {
  background-color: olive;
  .child {
    border: 1px solid red;
  }
}
</style>
