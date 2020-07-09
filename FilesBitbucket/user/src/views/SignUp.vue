<template>
  <div class="signup">
    <BackButtonHeader v-bind:path_name="path_name" />
    <v-row class="my-2">
      <v-col cols="4" justify="end">
        <v-img src="../assets/Isotipo de HawkAI.png" alt contain height="50px" />
      </v-col>
      <v-col cols="8">
        <h1 align="left">Sign Up</h1>
      </v-col>
    </v-row>
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm";
import BackButtonHeader from "../components/BackButtonHeader";

export default {
  name: "signup",
  components: {
    SignUpForm,
    BackButtonHeader
  },
  data() {
    return {
      path_name: "Login" //TODO: find out if the "Login" string can go directly in <BackButtonHeader /> call
    };
  }
};
</script>

<style scoped>
</style>
