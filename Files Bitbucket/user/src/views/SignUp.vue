<template>
  <div class="signup">
    <h1 class="text-center my-2">Sign Up</h1>
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
