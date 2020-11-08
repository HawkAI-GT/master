<template>
  <div>
    <v-card class="mx-auto" tile>
      <UserInfo v-bind:user="user" />
      <v-divider class="mx-4"></v-divider>
      <AccountInfo />
      <v-divider class="mx-4"></v-divider>
      <Support />
    </v-card>
    <BottomNav />
  </div>
</template>

<script>
import UserInfo from "../components/UserInfo";

import AccountInfo from "../components/AccountInfo";
import Support from "../components/Support";
import BottomNav from "../components/BottomNav";

export default {
  name: "User",

  components: {
    UserInfo,
    AccountInfo,
    Support,
    BottomNav
  },
  data() {
    return {
      user: {
        name: "Marcus Obrien",
        mall: "Oakland Mall",
        age: "26",
        email: "marcus@hawkai.me",
        dir: "My house",
        phone: "+502 3404-4860"
      }
    };
  }
};
</script>