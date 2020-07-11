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
              @click="tryAgain"
            ></v-text-field>
            <v-text-field
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              v-model="password"
              name="password"
              @click:append="showPassword = !showPassword"
              @click="tryAgain"
              single-line
              solo
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10">
            <h3 class="errormsg text-center">{{errormsg}}</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="button" color="#002649" style="width: 100%" @click="simpleLogIn">Log In 2</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center">
            <FacebookLoginButton />
          </v-col>
          <v-col class="d-flex justify-center">
            <v-btn class="button" color="#002649" style="width: 100%" @click="gotoSignUp">Sign Up</v-btn>
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
import firebase from "firebase";

export default {
  name: "Login",
  components: {
    LoginBackground,
    FacebookLoginButton
  },
  data() {
    return {
      errormsg: "",
      showPassword: false,
      username: "",
      password: ""
    };
  },
  methods: {
    simpleLogIn() {
      //TODO: Function to Login with username and password from database
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(data => {
          this.$router.replace({ name: "Feed" });
          console.log(data.username);
        })
        .catch(err => {
          console.log(err);
          this.errormsg = "Mail or password is not correct!";
        });
    },
    gotoSignUp() {
      //TODO: Router-link to sign up page
      console.log("Redirect to SignUp page");
      this.$router.replace({ name: "SignUp" });
    },
    tryAgain() {
      this.errormsg = "";
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

.errormsg {
  color: red;
}
</style>