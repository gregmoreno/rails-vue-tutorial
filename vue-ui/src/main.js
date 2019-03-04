import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import initStore from "./store/index";
import * as state_types from "@/store/state/types";

Vue.config.productionTip = false;

const store = initStore({
  [state_types.EVENTS]: []
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
