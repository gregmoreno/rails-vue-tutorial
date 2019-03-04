<template>
  <div class="container w-100">
    <div class="fl w-30 pa4">
      <h3 class="f4 mt0">Events</h3>
      <div class="pv2 bg-near-white pa3 bb" v-for="event in events" :key="event.id">
        <a href="#" @click="selectEvent(event)">
          <span>{{ event.event_date }}</span>
          &mdash;
          <span>{{ event.event_type }}</span>
        </a>
      </div>
    </div>
    <div class="fl w-70 pa4">
      <h3 v-if="!event" class="f4 mt0">Select an event</h3>  
      <Event :event="event" v-else/>
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
        }
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
        ])
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
