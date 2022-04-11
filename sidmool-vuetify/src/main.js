import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import axios from "axios";

Vue.use(Vuetify);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  axios,
  icons: {
    iconfont: "fa" || "mdi"
  },
  render: h => h(App)
});
