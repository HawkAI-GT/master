<template>
  <v-card flat>
    <v-container fluid>
      <v-row class="child-flex">
        <div>
          <v-toolbar elevation="1">
            <v-spacer></v-spacer>
            <v-toolbar-title text-center>HawkAI</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </div>
      </v-row>
    </v-container>
  </v-card>
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