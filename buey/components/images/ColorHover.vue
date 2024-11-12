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
    <img :src="imageSrc" alt="Image with Grayscale" class="image" />
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
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.image-container:hover .image {
  filter: grayscale(0%);
}
</style>
