<template>
  <div class="text-container">
    <hr class="line" />
    <p class="text-content">{{ text }}</p>
    <hr class="line" />
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
.text-container {
  width: 100%;
  text-align: center;
}

.text-content {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 3rem;
}

.line {
  border: none;
  border-top: 2px solid var(--color-primary);
  margin: 10px 0;
}
</style>


