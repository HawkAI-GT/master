<template>
  <v-app>
    <Login />
  </v-app>
</template>

<script>
import Login from "./views/Login";
export default {
  name: "App",
  components: {
    Login
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
#app {
  flex: 1;
}
</style>
