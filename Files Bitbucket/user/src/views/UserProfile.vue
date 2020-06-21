<template>
  <v-card class="mx-auto" max-width="434" tile>
    <UserPic v-bind:user="user" />
    <v-card-subtitle class="pb-0">Account Information</v-card-subtitle>
    <UserInfo v-bind:user="user" />
    <v-divider class="mx-4"></v-divider>
    <UserCardActions />
  </v-card>
</template>

<script>
import UserInfo from "../components/UserInfo.vue";
import UserPic from "../components/UserPic.vue";
import UserCardActions from "../components/UserCardActions.vue";

export default {
  components: {
    UserInfo,
    UserPic,
    UserCardActions
  },
  data() {
    return {
      user: {
        name: "Marcus Obrien",
        job: "Network Engineer",
        age: "26",
        email: "example@aja.com",
        dir: "My house",
        phone: "+502 3404-4860"
      }
    };
  }
};
</script>