import * as action_types from "@/store/actions/types";
import * as mutation_types from "@/store/mutations/types";
import api from "@/api";

export default {
  [action_types.GET_EVENTS]({ state, commit }) {
    return api
      .getEvents()
      .then(response => {
        commit(mutation_types.SET_EVENTS, response.data);
      })
  }
};