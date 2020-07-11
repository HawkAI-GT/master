<template>
  <div>
    <TopNav></TopNav>
<<<<<<< HEAD
    <FeedPost style="margin-bottom: 8vh;"></FeedPost>
    <BottomNav />
=======
    <FeedPost></FeedPost>
    <FeedPost></FeedPost>
    <FeedPost style="margin-bottom: 8vh;"></FeedPost>
    <BottomNav></BottomNav>
>>>>>>> 7d68900e53ef2b358adefe9f783b2e9e8ac1d9fa
  </div>
</template>
<script>
import TopNav from "@/components/TopNav.vue";
import FeedPost from "@/components/FeedPost.vue";
import BottomNav from "@/components/BottomNav.vue";

export default {
  name: "Feed",
  components: {
    TopNav,
    FeedPost,
    BottomNav
  }
};
</script>