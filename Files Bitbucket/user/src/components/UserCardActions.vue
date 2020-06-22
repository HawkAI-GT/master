<template>
  <v-card-actions>
    <v-btn outlined color="red" to="/user" text>Cancel</v-btn>
    <v-spacer></v-spacer>
    <v-btn outlined color="green" text to="/user">Save</v-btn>
  </v-card-actions>
</template>

<script>
export default {
  name: "UserCardActions"
};
</script>