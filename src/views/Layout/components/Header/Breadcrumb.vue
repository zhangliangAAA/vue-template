<template>
  <el-breadcrumb
    separator-class="el-icon-arrow-right"
    style="line-height: 60px;"
  >
    <el-breadcrumb-item
      v-for="item in levelList"
      :key="item.path"
      :to="item.path"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      levelList: []
    };
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.path);
      const first = matched[0];
      if (
        first &&
        first.name.trim().toLocaleLowerCase() !== "Home".toLocaleLowerCase()
      ) {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      this.levelList = matched;
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  }
};
</script>

<style></style>
