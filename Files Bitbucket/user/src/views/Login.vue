<template>
  <div>
    <LoginBackground />

    <v-form>
      <v-container class="formContainer">
        <v-row>
          <v-col>
            <v-text-field label="Nombre de Usuario" single-line solo dense></v-text-field>
            <v-text-field
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              label="Contraseña"
              @click:append="showPassword = !showPassword"
              single-line
              solo
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center">
            <FacebookLoginButton />
          </v-col>
          <v-col class="d-flex justify-center">
            <button class="button">Sign Up</button>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="formContainer"></div>
  </div>
</template>

<script>
import LoginBackground from "../components/LoginBackground";
import FacebookLoginButton from "../components/FacebookLoginButton";
export default {
  name: "Login",
  components: {
    LoginBackground,
    FacebookLoginButton
  },
  data() {
    return {
      showPassword: false
    };
  },
  methods: {}
};
</script>

<style scoped>
.formContainer {
  position: absolute;
  top: 35%;
}
.button {
  color: white;
  min-width: 150px;
  background-color: #000000a1;
  height: 2.5rem;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}
</style>