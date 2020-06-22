<template>
  <v-card class="mx-auto" max-width="434" tile>
    <UserInfo v-bind:user="user" />
    <v-card-subtitle class="pb-0">Account Information</v-card-subtitle>
    <UserMetadata v-bind:user="user" />
    <UserCardActions />
  </v-card>
</template>

<script>
import UserMetadata from "../components/UserMetadata.vue";
import UserInfo from "../components/UserInfo.vue";
import UserCardActions from "../components/UserCardActions.vue";

export default {
  name: "EditProfile",

  components: {
    UserInfo,
    UserMetadata,
    UserCardActions
  },
  data() {
    return {
      user: {
        name: "Marcus Obrien",
        mall: "Oakland Mall",
        age: "26",
        email: "example@aja.com",
        dir: "My house",
        phone: "+502 3404-4860"
      }
    };
  }
};
</script>