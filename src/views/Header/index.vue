<template>
  <div class="header">
    <Header>
      <span>用户：{{ userName }}</span>
      <button @click="logOut">注销</button>
    </Header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userName"])
  },
  methods: {
    ...mapActions(["logOut"])
  }
};
</script>
<style lang="scss">
.header {
  header {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
