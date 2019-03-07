import * as mutation_types from "@/store/mutations/types";
import * as state_types from "@/store/state/types";

export default {
  [mutation_types.SET_EVENTS](state, events) {
    state[state_types.EVENTS] = events;
  },
  [mutation_types.SET_EVENT](state, event) {
    const i = state[state_types.EVENTS].findIndex(e => e.id == event.id);

    if (i >= 0) {
      // DOM will not be updated if you modify via index.
      state[state_types.EVENTS].splice(i, 1, event);
    } else {
      state[state_types.EVENTS].push(event);
    }
  },
  [mutation_types.DELETE_EVENT](state, event) {
    const i = state[state_types.EVENTS].findIndex(e => e.id == event.id);

    if (i >= 0) {
      state[state_types.EVENTS].splice(i, 1);
    }
  }
};
