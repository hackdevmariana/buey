<template>
  <div class="event-container">
    <div class="icon-column">
      <Icon name="ion:calendar-outline" class="icon" />
    </div>
    <div class="date-column">
      <div class="day">{{ day }}</div>
      <div class="month">{{ month }}</div>
      <div class="year">{{ year }}</div>
    </div>
    <div class="details-column">
      <div class="time">{{ startTime }} - {{ endingTime }}</div>
      <div class="title"><a :href="link" class="event-link">{{ title }}</a></div>
      <div class="text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    day: {
      type: String,
      default: ""
    },
    month: {
      type: String,
      default: ""
    },
    year: {
      type: String,
      default: ""
    },
    startTime: {
      type: String,
      default: ""
    },
    endingTime: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>
.event-container {
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  padding-top: 1rem;
}

.date-column {
  flex: 1;
  text-align: center;
}

.icon-column {
  flex: 1;
  text-align: center;
  font-size: 4rem;
}

.day {
  font-size: 3rem;
  font-weight: bold;
}

.month,
.year {
  font-size: 16px;
}

.details-column {
  flex: 6;
  padding-left: 20px;
}

.time {
  font-size: 14px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
}

.text {
  font-size: 14px;
}

.event-link {
  text-decoration: none;
  color: inherit;
  font-size: 2rem;
}
</style>
