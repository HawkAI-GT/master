<template>
  <v-card-actions>
    <v-btn text>Cancel</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="primary" text @click="submit">Save</v-btn>
  </v-card-actions>
</template>

<script>
export default {
  name: "UserCardActions"
};
</script>