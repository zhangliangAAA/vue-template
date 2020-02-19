<template>
  <div id="app">
    <!-- <div class="content">
      <div class="side">
        <Sidebar></Sidebar>
      </div>
      <div class="main">
        <Header></Header>
        <router-view />
      </div>
    </div> -->
    <router-view class="loginview" name="out"></router-view>
    <router-view></router-view>
    <!-- <Layout></Layout> -->
  </div>
</template>

<script>
import { hanleRoutes } from "@/utils/permission";
import { mapGetters } from "vuex";
// import Sidebar from "@/views/Sidebar/OriginSidebar.vue";
// import Header from "@/views/Header";
// import Layout from "@/views/Layout";
export default {
  components: {
    // Sidebar,
    // Header
    // Layout
  },
  data() {
    return {};
  },
  created() {
    let routes = JSON.parse(localStorage.getItem("authTree"));
    if (routes) {
      // hanleRoutes(routes, this);
    }
  },
  mounted() {},
  computed: {
    ...mapGetters(["isLogin"])
  },
  methods: {
    click() {}
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .content {
    height: 100%;
    display: flex;
    .side {
      margin-right: 10px;
    }
    .main {
      flex: 1;
    }
  }
}
</style>
