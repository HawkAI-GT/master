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
  background-image: radial-gradient(
    circle,
    rgb(128, 212, 236),
    rgba(128, 212, 236, 1) 0%,
    rgba(87, 134, 190, 1) 100%
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