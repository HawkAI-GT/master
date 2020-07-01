<template>
  <div>
    <BackButtonHeader v-bind:path_name="path_name" />
    <div class="text-center">
      <h1>Hello there</h1>
      <p>Thanks, this information will improve your experience.</p>
      <AdditionalForm />
    </div>
  </div>
</template>

<script>
import AdditionalForm from "../components/AdditionalForm";
import BackButtonHeader from "../components/BackButtonHeader";

export default {
  name: "AdditionalInfo",
  components: {
    AdditionalForm,
    BackButtonHeader
  },
  data() {
    return {
      path_name: "User"
    };
  }
};
</script>

<style scoped>
</style>