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
@font-face {
  font-family: "Caviar-Dreams";
  src: url("./assets/fonts/webfonts_Caviar-Dreams/Caviar-Dreams.ttf.woff")
      format("woff"),
    url("./assets/fonts/webfonts_Caviar-Dreams/Caviar-Dreams.ttf.svg#Caviar-Dreams")
      format("svg"),
    url("./assets/fonts/webfonts_Caviar-Dreams/Caviar-Dreams.ttf.eot"),
    url("./assets/fonts/webfonts_Caviar-Dreams/Caviar-Dreams.ttf.eot?#iefix")
      format("embedded-opentype");
  font-weight: normal;
  font-style: normal;
}

#app {
  flex: 1;
  font-family: "Caviar-Dreams";
}
</style>
