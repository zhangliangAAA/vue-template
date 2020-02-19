<template>
  <div class="login">
    <!-- <div class="content"> -->
    <el-form label-position="left" label-width="80px">
      <el-form-item label="用户名：">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="passWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
    <!-- </div> -->
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
      this.logIn({ username: this.name, passwd: this.passWord })
        .then(res => {
          const { routes } = res;
          hanleRoutes(routes, this);
          console.log(this.$router.options.routes);
          this.$router.push({ name: "Home" });
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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
