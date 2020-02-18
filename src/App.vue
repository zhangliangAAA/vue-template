<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/page1">Page1</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/nestRouter/child1">NestRouter1</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { hanleRoutes } from "@/utils/permission";
import { mapGetters } from "vuex";
export default {
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
