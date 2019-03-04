<template>
  <div>
    <h3>
      {{ event.event_date }}
      &mdash;
      <span>{{ event.event_type }}</span>
    </h3>
    <p>
      <strong>Type:</strong> {{ event.event_type }}
    </p>
    <p>
      <strong>Date:</strong> {{ event.event_date }}
    </p>
    <p>
      <strong>Title:</strong> {{ event.title }}
    </p>
    <p>
      <strong>Speaker:</strong> {{ event.speaker }}
    </p>
    <p>
      <strong>Host:</strong> {{ event.host }}
    </p>
    <p>
      <strong>Published: </strong> {{ event.published }}
    </p>
  </div>
</template>

<script>
export default {
    props: {
        event: {
            type: Object,
            required: true
        }
    }
};
</script>
