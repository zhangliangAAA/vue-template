<template>
  <div>
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
      <SidebarItem :routes="authTree"></SidebarItem>
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
    ...mapGetters(["authTree"])
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
      console.log("matched", matched);
      this.activePath = matched[matched.length - 1].path;
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
