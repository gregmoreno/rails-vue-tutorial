<template>
  <div class="cf">
    <div class="fl w-100 w-25-ns pr0 pr2-ns">
      <h2 class="f5 mt0">Events</h2>
      <div v-for="event in events"
           :key="event.id"
           class="pv2 bg-near-white pa3 bb">
        <a href="#" @click="selectEvent(event)">
          <span>{{ event.event_date }}</span>
          &mdash;
          <span>{{ event.event_type }}</span>
        </a>
      </div>
    </div>
    <div class="fl w-100 w-75-ns pl0 pl2-ns">
      <Event :event="event" v-if="event"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { GET_EVENTS } from "@/store/actions/types";
import { EVENTS } from "@/store/state/types";
import Event from "@/components/Event";

export default {
  data() {
    return {
      event: null
    };
  },
  components: {
    Event
  },
  created() {
    this[GET_EVENTS]();
  },
  computed: {
    ...mapState([
      EVENTS
    ]),
    events() {
      return this[EVENTS];
    }
  },
  methods: {
    ...mapActions([
      GET_EVENTS
    ]),
    selectEvent(event) {
      this.event = event;
    }
  }
};
</script>
