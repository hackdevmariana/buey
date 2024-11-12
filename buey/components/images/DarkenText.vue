<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  textOverlay: {
    type: String,
    default: "Hover Text"
  }
});
</script>

<template>
  <div class="image-container">
    <img :src="imageSrc" alt="Image with Darken Effect" class="image" />
    <div class="overlay-text">{{ textOverlay }}</div>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .image {
  opacity: 0.6;
}

.image-container:hover .overlay-text {
  opacity: 1;
}
</style>
