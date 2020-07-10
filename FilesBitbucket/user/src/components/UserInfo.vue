<template>
  <div>
    <v-row justify="center">
      <v-avatar class="mt-14 mb-7 gradient-1" size="100">
        <v-icon :style="{ fontSize: '75px' }" dark>mdi-account</v-icon>
      </v-avatar>
    </v-row>
    <v-row justify="center">
      <div>
        <div class="d-block">
          <h2>{{user.name}}</h2>
        </div>
        <div class="d-block blue-grey--text text--lighten-2">
          <h3>{{user.email}}</h3>
        </div>
      </div>
    </v-row>
  </div>
</template>

<style>
.gradient-1 {
  background: rgb(128, 212, 236);
  background: -moz-radial-gradient(
    circle,
    rgba(128, 212, 236, 1) 0%,
    rgba(87, 134, 190, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(128, 212, 236, 1) 0%,
    rgba(87, 134, 190, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(128, 212, 236, 1) 0%,
    rgba(87, 134, 190, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#80d4ec",endColorstr="#5786be",GradientType=1);
}
</style>

<script>
export default {
  name: "UserInfo",
  props: ["user"]
};
</script>