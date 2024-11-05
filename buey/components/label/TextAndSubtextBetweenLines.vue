<template>
  <div class="text-container">
    <div class="line"></div>
    <div class="text-content">
      <h1 class="text">{{ text }}</h1>
      <p class="subtext">{{ subtext }}</p>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    subtext: String
  }
}
</script>

<style>
.text-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.text-content {
  text-align: center;
  flex-grow: 1;
}

.text {
  font-size: 3rem;
}

.subtext {
  font-size: 1.5rem;
}

.line {
  flex-grow: 1;
  border-top: 2px solid var(--color-primary);
  margin: 0;
}
</style>
