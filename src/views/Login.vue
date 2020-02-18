<template>
  <div class="login">
    <div class="content">
      <p>用户名：<input v-model="name" /></p>
      <p>密 码：<input v-model="passWord" /></p>
      <p><button @click="login">登录</button></p>
    </div>
  </div>
</template>

<script>
import { hanleRoutes } from "@/utils/permission";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      name: "",
      passWord: ""
    };
  },
  methods: {
    ...mapActions(["logIn"]),
    login() {
      // user
      //   .login({ username: this.name, passwd: this.passWord })
      //   .then(res => {
      //     const { routes } = res;
      //     let rs = formatRoutes(routes);
      //     console.log("rs", rs);

      //     this.$router.addRoutes(rs);
      //     console.log(this.$router);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });

      this.logIn({ username: this.name, passwd: this.passWord })
        .then(res => {
          const { routes } = res;
          hanleRoutes(routes, this);
          console.log(this.$router.options.routes);
        })
        .catch(err => {
          console.log(err);
        });
      console.log(this.$router.options.routes);
    }
  }
};
</script>
<style lang="scss">
.login {
  background-color: olive;
}
</style>
