<template>
  <div class="image-container">
    <img :src="imageSrc" class="image" />
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.image-container {
  width: 100%;
  overflow: hidden;
}

.image {
  width: 100%;
  transition: transform 0.3s ease-in-out;
}

.image:hover {
  transform: scale(1.1);
}
</style>

