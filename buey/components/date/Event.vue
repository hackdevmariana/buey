<template>
  <div v-if="isAfterCurrentDate" class="event-container">
    <span>{{ formattedDate }}</span>
    <span v-if="endTime">, de {{ startTime }} a {{ endTime }}</span>
    <span v-else>, a partir de las {{ startTime }}</span>
  </div>
  <div v-else class="event-container">
    Este evento ha terminado
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    startTime: {
      type: String,
      required: true
    },
    endTime: {
      type: String,
      required: false
    }
  },
  computed: {
    isAfterCurrentDate() {
      return new Date(this.date) > new Date();
    },
    formattedDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(this.date);
      return date.toLocaleDateString('es-ES', options);
    }
  }
};
</script>


