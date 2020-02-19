<template>
  <div class="head">
    <Breadcrumb></Breadcrumb>
    <UserInfo></UserInfo>
  </div>
</template>

<script>
import UserInfo from "./UserInfo";
import Breadcrumb from "./Breadcrumb";
export default {
  components: {
    Breadcrumb,
    UserInfo
  }
};
</script>

<style>
.head {
  display: flex;
  justify-content: space-between;
}
</style>
