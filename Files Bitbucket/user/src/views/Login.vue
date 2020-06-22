<template>
  <div>
    <LoginBackground />

    <v-form>
      <v-container class="formContainer">
        <v-row>
          <v-col>
            <v-text-field
              label="Username"
              v-model="username"
              name="username"
              single-line
              solo
              dense
            ></v-text-field>
            <v-text-field
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              v-model="password"
              name="password"
              @click:append="showPassword = !showPassword"
              single-line
              solo
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <button class="button" style="width: 100%" @click="simpleLogIn">Log In</button>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center">
            <FacebookLoginButton />
          </v-col>
          <v-col class="d-flex justify-center">
            <button class="button" @click="gotoSignUp">Sign Up</button>
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
      showPassword: false,
      username: "",
      password: ""
    };
  },
  methods: {
    simpleLogIn() {
      //TODO: Function to Login with username and password from database
      console.log("Log in with username and password");
    },
    gotoSignUp() {
      //TODO: Router-link to sign up page
      console.log("Redirect to SignUp page");
    }
  }
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