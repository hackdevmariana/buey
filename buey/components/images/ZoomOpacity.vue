<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="image-container">
    <img :src="imageSrc" alt="Image with Zoom and Opacity" class="image" />
  </div>
</template>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.image-container:hover .image {
  transform: scale(1.1);
  opacity: 0.8;
}
</style>
