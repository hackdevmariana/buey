<template>
  <div class="container-event">
    <div class="day">{{ day }}</div>
    <div class="month-year">
      <strong>{{ month }} {{ year }}</strong>
      <div>{{ startTime }} - {{ endingTime }}</div>
    </div>
    <div class="column-image image">
      <img :src="image" alt="Event image" class="rounded-image" />
    </div>
    <div class="column title-text">
      <strong class="title">{{ title }}</strong>
      <div class="text">{{ text }}</div>
    </div>
    <div class="button">
      <a :href="linkButton" class="button">{{ textButton }}</a>
    </div>
    <div class="button-mobile">
      <a :href="linkButton">
      <Icon name="flowbite:angle-right-outline" class="icon" />
    </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    day: String,
    month: String,
    year: String,
    startTime: String,
    endingTime: String,
    image: String,
    title: String,
    text: String,
    textButton: String,
    linkButton: String,
  },
};
</script>

<style scoped>
.container-event {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.column-image {
  flex-basis: 10%;
  display: block; /* Por defecto, se muestra en todas las pantallas */
}
.day {
  font-size: 4em;
  flex-basis: 10%;
}
.month-year strong {
  font-weight: bold;
  flex-basis: 20%;

}
.image .rounded-image {
  border-radius: 50%;
  max-width: 100px;
}
.title {
  font-size: 1.5em;
  font-weight: bold;
}
.text {
  font-size: 0.875em;
}
.button, .button-mobile {
  background-color: var(--color-bg-button);
  color: var(--color-text-button);
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  flex-basis: 5%;

}

.button-mobile {
  font-size: 2em;
}

.title-text {
  flex-basis: 40%;
}

@media (max-width: 719px) {
  .column-image {
    display: none;
  }
  .button {
    display: none;
  }
}

@media (min-width: 719px) {
  .button-mobile {
    display: none;
  }
}
</style>
