<template>
  <div>
    <TopNav></TopNav>
    <FeedPost style="margin-bottom: 8vh;"></FeedPost>
    <BottomNav />
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