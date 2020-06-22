<template>
  <div class="signup">
    <v-row class="my-2">
      <v-col cols="4" justify="end">
        <v-img src="../assets/Isotipo de HawkAI.png" alt=""
        contain   
        height="50px" 
        />
      </v-col>
      <v-col cols="8">
        <h1 align="left">
          Sign Up
        </h1>
      </v-col>
    </v-row>
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm'

export default {
  name:"signup",
  components:{
    SignUpForm
  }
}
</script>

<style scoped>
</style>
