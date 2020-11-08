<template>
  <v-bottom-navigation
    fixed
    grow
    color="blue"
    style="
    border-radius: 20px 20px 0px 0px;
    -webkit-box-shadow: 0px -2px 23px -7px rgba(0,0,0,0.75);
-moz-box-shadow: 0px -2px 23px -7px rgba(0,0,0,0.75);
box-shadow: 0px -2px 23px -7px rgba(0,0,0,0.75);
    "
  >
    <v-btn :to="{ name: 'Feed' }">
      <span>Home</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'ComingSoon' }">
      <span>Search</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'ComingSoon' }">
      <span>Liked</span>
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'User' }">
      <span>Profile</span>
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNav",
  data() {
    return {};
  }
};
</script>