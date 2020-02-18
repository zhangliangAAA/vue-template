<template>
  <div class="sidebar">
    <div class="content">
      <div v-for="rt in resRoutes" :key="rt.path" class="sidebarItem">
        <SidebarItem v-if="!rt.children" :rt="rt"></SidebarItem>
        <div v-else>
          <h4>{{ rt.name }}</h4>
          <OriginSidebar :routes="rt.children"></OriginSidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
export default {
  name: "OriginSidebar",
  components: { SidebarItem },
  props: ["routes"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["authTree"]),
    resRoutes() {
      return this.routes || this.authTree;
    }
  },
  methods: {}
};
</script>
<style lang="scss">
.sidebar {
  background-color: gray;
  height: 100%;
  .content {
    display: flex;
    flex-direction: column;
  }
}
</style>
