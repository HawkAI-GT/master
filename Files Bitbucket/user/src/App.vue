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
      <v-btn text color="white">
        <router-link to="/user">Profile</router-link>
      </v-btn>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>


    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
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