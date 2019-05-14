import Vue from "vue";
import Vuex from "vuex";

import mutations from "@/store/mutations/index";
import actions from "@/store/actions/index";

export default function initStore(state) {
  Vue.use(Vuex);

  return new Vuex.Store({
    state,
    mutations,
    actions
  });
}
