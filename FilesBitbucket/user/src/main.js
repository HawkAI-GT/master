import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import * as firebase from "firebase"

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyB4WS6znN3-BTJCiyFscYS7h7UfF-yXpkA",
  authDomain: "hawkai.firebaseapp.com",
  databaseURL: "https://hawkai.firebaseio.com",
  projectId: "hawkai",
  storageBucket: "hawkai.appspot.com",
  messagingSenderId: "242487822523",
  appId: "1:242487822523:web:5fcf96b56bdd146bd9c19e",
  measurementId: "G-JT8PPX4X7J"
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
