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
    <img :src="imageSrc" alt="Image with Blur" class="image" />
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
  filter: blur(5px);
  transition: filter 0.3s ease;
}

.image-container:hover .image {
  filter: blur(0);
}
</style>
