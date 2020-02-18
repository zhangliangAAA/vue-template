<template>
  <div class="layout">
    <el-container class="layoutContent">
      <el-aside width="200px">
        Aside
        <NavMenu></NavMenu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <p>Main</p>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
export default {
  components: {
    NavMenu
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.layout {
  height: 100vh;
  .layoutContent {
    height: 100%;
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}
</style>
