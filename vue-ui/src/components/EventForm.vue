<template>
  <div>
    <h2 class="f5 mt0">
      New Event
    </h2>
      <form v-on:submit.prevent="saveEvent()" className="eventForm">
        <input
          type="hidden"
          v-model="aEvent.id"
        >
        <div>
          <label htmlFor="event_type">
            <strong>Type:</strong>
            <input
              type="text"
              id="event_type"
              name="event_type"
              v-model="aEvent.event_type"
            />
          </label>
        </div>
        <div>
          <label htmlFor="event_date">
            <strong>Date:</strong>
            <input
              type="text"
              id="event_date"
              name="event_date"
              ref={this.dateInput}
              autoComplete="off"
              v-model="aEvent.event_date"
            />
          </label>
        </div>
        <div>
          <label htmlFor="title">
            <strong>Title:</strong>
            <textarea
              cols="30"
              rows="10"
              id="title"
              name="title"
              v-model="aEvent.title"
            />
          </label>
        </div>
        <div>
          <label htmlFor="speaker">
            <strong>Speakers:</strong>
            <input
              type="text"
              id="speaker"
              name="speaker"
              v-model="aEvent.speaker"
            />
          </label>
        </div>
        <div>
          <label htmlFor="host">
            <strong>Hosts:</strong>
            <input
              type="text"
              id="host"
              name="host"
              v-model="aEvent.host"
            />
          </label>
        </div>
        <div>
          <label htmlFor="published">
            <strong>Publish:</strong>
            <input
              type="checkbox"
              id="published"
              name="published"
              v-model="aEvent.published"
            />
          </label>
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
        </div>
      </form>
  </div>
</template>

<script>
import { SAVE_EVENT } from "@/store/actions/types";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      // Because you don't want changes to propagate until saved,
      // you only work on a copy.
      aEvent: { ...this.event }
    }
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions([
      SAVE_EVENT
    ]),
    saveEvent() {
      this[SAVE_EVENT](this.aEvent)
        .then(() => {
          this.$emit("eventSelected", this.aEvent);
        });
    }
  }
};
</script>
