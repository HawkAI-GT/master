<template>
  <v-card-actions>
    <v-btn outlined color="red" depressed text>Exit</v-btn>
    <v-spacer></v-spacer>
    <v-btn outlined color="primary" to="/userprofile" text>Edit</v-btn>
  </v-card-actions>
</template>

<script>
export default {
  name: "Account Edit"
};
</script>