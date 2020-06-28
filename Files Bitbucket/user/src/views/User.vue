<template>
  <v-card class="mx-auto" max-width="434" tile>
    <UserInfo v-bind:user="user" />
    <v-card-subtitle class="pb-0">Account Information</v-card-subtitle>
    <v-divider class="mx-4"></v-divider>
    <AccountInfo />
    <v-divider class="mx-4"></v-divider>
    <Support />
    <ButtonEdit />
  </v-card>
</template>

<script>
import UserInfo from "../components/UserInfo";
import ButtonEdit from "../components/ButtonEdit";
import AccountInfo from "../components/AccountInfo";
import Support from "../components/Support";

export default {
  name: "User",

  components: {
    UserInfo,
    ButtonEdit,
    AccountInfo,
    Support
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