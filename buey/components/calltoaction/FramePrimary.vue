<template>
  <div class="container">
    <div class="inner-container">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-container {
  background-color: var(--color-light-primary);
  color: var(--color-dark-primary);
  font-size: 2.5rem;
  width: 80%;
  padding: 5rem;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
}
</style>
