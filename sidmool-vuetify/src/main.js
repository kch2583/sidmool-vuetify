import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import axios from "axios";
import router from "./router";

Vue.use(Vuetify);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  axios,
  router,
  icons: {
    iconfont: "fa" || "mdi"
  },
  render: h => h(App)
});
