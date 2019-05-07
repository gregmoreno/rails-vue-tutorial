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
  },
  [action_types.SAVE_EVENT]({ state, commit }, event) {
    let method;

    if (event.id) {
      method = api.updateEvent;
    } else {
      method = api.createEvent;
    }

    return new Promise((resolve, reject) => {
      method(event)
      .then(response => {
        commit(mutation_types.SET_EVENT, response.data);
        resolve(response.data);
      })
      .catch(error => {
        // TODO
        // reject(error.response.data.error);
      })
    });
 },
  [action_types.DELETE_EVENT]({ state, commit }, event) {
    if (event.id) {
      return api
        .deleteEvent(event)
        .then(response => {
          commit(mutation_types.DELETE_EVENT, event);
        })
    }
  }
};
