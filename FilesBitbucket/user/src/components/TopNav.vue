<template>
  <v-card flat>
    <v-container fluid>
      <v-row class="child-flex">
        <div>
          <v-toolbar>
            <v-btn icon class="hidden-xs-only">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <v-toolbar-title>HawkAI Cliente</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon class="hidden-xs-only">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
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