import Vue from "vue";
import App from "./App.vue";
import VModal from "vue-js-modal";
import store from "./store";

Vue.config.productionTip = false;

// Adding the modal plugin
Vue.use(VModal, { dynamic: true });

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
