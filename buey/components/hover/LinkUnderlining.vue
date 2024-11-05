<template>
  <a :href="link" class="custom-link">{{ text }}</a>
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
.custom-link {
  text-decoration: none;
  position: relative;
}

.custom-link:hover::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  animation: underline 0.5s forwards;
}

@keyframes underline {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>

