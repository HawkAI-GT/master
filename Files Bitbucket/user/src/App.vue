<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn flat color="white">
        <router-link to="/user">Profile</router-link>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    //HelloWorld
  },

  data: () => ({
    //
  })
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