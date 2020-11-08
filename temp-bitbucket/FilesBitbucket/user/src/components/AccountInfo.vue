<template>
  <div class="mt-3 mb-2">
    <v-divider
      class="mx-4 mb-3"
      :inset="inset"
      :style="{borderColor: 'rgba(82,82, 82) !important'}"
    ></v-divider>
    <h3 class="ml-2 mb-2">Account Options</h3>

    <v-btn block text small>Refer to friends</v-btn>
    <v-btn block text small>Used Coupons</v-btn>
    <v-btn block text small>Close Session</v-btn>
    <v-btn block text small>Delete Account</v-btn>
  </div>
</template>

<script>
export default {
  name: "AccountInfo"
};
</script>