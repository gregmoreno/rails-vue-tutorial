import * as mutation_types from "@/store/mutations/types";
import * as state_types from "@/store/state/types";

export default {
    [mutation_types.SET_EVENTS](state, events) {
        state[state_types.EVENTS] = events;
    }
};
