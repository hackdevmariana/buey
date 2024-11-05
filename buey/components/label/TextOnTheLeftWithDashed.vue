<template>
  <div class="text-container">
    <span class="text">{{ text }}</span>
    <div class="dashed-line"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style scoped>
.text-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.text {
  font-size: 3rem;
  margin-right: 1rem;
}

.dashed-line {
  flex-grow: 1;
  border-top: 2px dashed var(--color-primary);
}
</style>
