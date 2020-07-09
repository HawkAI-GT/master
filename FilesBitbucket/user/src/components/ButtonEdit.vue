<template>
  <v-card-actions>
    <v-row>
      <v-btn outlined color="red" depressed text>Exit</v-btn>
      <v-spacer></v-spacer>
      <v-btn outlined color="primary" to="/additional" text>Improve Experience</v-btn>
      <v-spacer></v-spacer>
      <v-btn outlined color="primary" to="/userprofile" text>Edit</v-btn>
    </v-row>
  </v-card-actions>
</template>

<script>
export default {
  name: "ButtonEdit"
};
</script>