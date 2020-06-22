<template>
  <v-card class="mx-auto" max-width="434" tile>
    <UserPic v-bind:user="user" />
    <v-card-subtitle class="pb-0">Account Information</v-card-subtitle>
    <UserInfo v-bind:user="user" />
    <v-divider class="mx-4"></v-divider>
    <AccountInfo />
    <v-divider class="mx-4"></v-divider>
    <Support />
    <ButtonEdit />
  </v-card>
</template>

<script>
import UserPic from "../components/UserInfo.vue";
import ButtonEdit from "../components/ButtonEdit";
import AccountInfo from "../components/AccountInfo";
import Support from "../components/Support";

export default {
  name: "User",

  components: {
    UserPic,
    ButtonEdit,
    AccountInfo,
    Support
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