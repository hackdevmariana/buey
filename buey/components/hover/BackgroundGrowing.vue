<template>
  <a :href="link" class="text-link">{{ text }}</a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.text-link {
  background: none;
  position: relative;
  text-decoration: none;
  transition: background-size 0.3s ease-in-out;
}

.text-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--color-primary);
  transition: width 0.3s ease-in-out;
  z-index: -1;
}

.text-link:hover::after {
  width: 100%;
}
</style>
