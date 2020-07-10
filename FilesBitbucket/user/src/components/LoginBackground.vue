<template>
  <div id="landing-page">
    <v-row align="center" justify="center">
      <v-img src="../assets/logohawkai.png" id="img" height="220px" width="220px" contain></v-img>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "LoginBackground"
};
</script>

<style scoped>
.imageContainer {
  position: relative;
}

#landing-page {
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(59, 59, 177, 1) 50%,
    rgba(0, 212, 255, 1) 150%
  );

  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

#img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  margin-top: -290px; /* Half the height */
  margin-left: -115px; /* Half the width */
}
</style>