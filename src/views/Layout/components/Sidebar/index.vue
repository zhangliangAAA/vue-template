<template>
  <div class="sidebar">
    <el-menu
      :default-active="activePath"
      :router="true"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <SidebarItem :routes="resRoutes"></SidebarItem>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
export default {
  name: "",
  components: {
    SidebarItem
  },
  data() {
    return {
      isCollapse: true,
      activePath: "/home"
    };
  },
  computed: {
    ...mapGetters(["authTree"]),
    resRoutes() {
      console.log("named-router", this.authTree[0].children);
      // 由于使用named-router，需要去除根路由
      return this.authTree[0].children;
      // return this.$router.options.routes[1].children;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(index, path) {
      console.log("选中的", index, path);
    },
    computedaActivePath() {
      let matched = this.$route.matched.filter(item => item.name);

      let activePath = matched[matched.length - 1].path;
      console.log("matched", matched, activePath);
      this.activePath = activePath;
    }
  },
  watch: {
    $route() {
      this.computedaActivePath();
    }
  }
};
</script>

<style>
.sidebar {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
  height: 100%;
}
</style>
