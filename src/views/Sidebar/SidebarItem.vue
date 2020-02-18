<template>
  <div class="sidebarItem">
    <router-link :to="rt.path">{{ rt.name }}</router-link>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  components: {},
  props: ["rt"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.sidebarItem {
}
</style>
