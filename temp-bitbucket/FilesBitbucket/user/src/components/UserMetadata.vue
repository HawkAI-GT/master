<template>
  <v-card-text class="text--primary">
    <div>
      <v-text-field v-model="user.email" label="E-mail" prepend-icon="mdi-email"></v-text-field>
      <v-text-field v-model="user.phone" label="Phone" prepend-icon="mdi-phone"></v-text-field>
      <v-text-field v-model="user.dir" label="Direction" prepend-icon="mdi-map-marker"></v-text-field>
      <v-text-field v-model="user.age" label="Age" prepend-icon="mdi-chart-donut"></v-text-field>
      <v-autocomplete
        ref="sex"
        v-model="sex"
        :rules="[() => !!sex || 'This field is required']"
        :items="sex"
        label="Sex"
        prepend-icon="mdi-gender-male-female"
        placeholder="Male"
        required
      ></v-autocomplete>
    </div>
  </v-card-text>
</template>

<script>
export default {
  name: "UserMetadata",

  props: ["user"],

  data() {
    return {
      sex: ["Male", "Female", "Other"]
    };
  },

  computed: {
    form() {
      return {
        sex: this.sex
      };
    }
  }
};
</script>