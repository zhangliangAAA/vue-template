<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/page1">Page1</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/nestRouter/child1">NestRouter1</router-link>
    </div> -->
    <div class="content">
      <div class="side">
        <Sidebar></Sidebar>
      </div>
      <div class="main">
        <Header></Header>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { hanleRoutes } from "@/utils/permission";
import { mapGetters } from "vuex";
import Sidebar from "@/views/Sidebar/OriginSidebar.vue";
import Header from "@/views/Header";
export default {
  components: {
    Sidebar,
    Header
  },
  data() {
    return {};
  },
  created() {
    let routes = JSON.parse(localStorage.getItem("authTree"));
    if (routes) {
      hanleRoutes(routes, this);
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
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
