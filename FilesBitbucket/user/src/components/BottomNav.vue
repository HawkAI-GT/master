<template>
  <v-bottom-navigation fixed :value="activeBtn" grow color="teal">
    <v-btn :to="{ name: 'Feed' }">
      <span>Home</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'ComingSoon' }">
      <span>Search</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'ComingSoon' }">
      <span>Favorites</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'User' }">
      <span>Profile</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1
    };
  }
};
</script>