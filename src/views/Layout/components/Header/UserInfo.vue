<template>
  <div class="userInfo">
    <i class="el-icon-user-solid"></i>
    <el-button @click="logOut" type="primary">退出</el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["logOut"])
  }
};
</script>

<style>
.userInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
