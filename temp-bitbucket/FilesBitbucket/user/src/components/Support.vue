<template>
  <div class="my-4">
    <v-divider
      class="mx-4 mb-3"
      :inset="inset"
      :style="{borderColor: 'rgba(82,82, 82) !important'}"
    ></v-divider>
    <v-btn block text small>FAQ's</v-btn>
    <v-btn block text small>Contact Us</v-btn>
    <v-btn block text small>Terms and Conditions</v-btn>
  </div>
</template>

<script>
export default {
  name: "Support"
};
</script>