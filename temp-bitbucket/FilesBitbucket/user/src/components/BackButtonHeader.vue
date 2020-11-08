<template>
  <v-toolbar dense color="#004A93">
    <v-btn icon :to="{ name: path_name}">
      <v-icon color="white">mdi-backspace</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "BackButtonHeader",
  props: ["path_name"] //? Send the path_name with the router name you want to return to
};
</script>

<style>
</style>