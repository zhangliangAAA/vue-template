<template>
  <div>
    <template v-for="route in routes">
      <el-submenu v-if="route.children" :index="route.path" :key="route.name">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ route.meta && route.meta.title }}</span>
        </template>
        <SidebarItem :routes="route.children"></SidebarItem>
      </el-submenu>
      <el-menu-item
        v-else-if="route.meta && route.meta.visible"
        :index="route.path"
        :key="route.name"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ route.meta && route.meta.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: ["routes"],
  data() {
    return {
      // isCollapse: true
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style></style>
