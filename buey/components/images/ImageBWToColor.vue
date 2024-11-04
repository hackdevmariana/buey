<template>
  <div class="image-container">
    <img :src="imageSrc" class="bw-image" />
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
  height: 100%;
  overflow: hidden;
}

.bw-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
}

.bw-image:hover {
  filter: grayscale(0%);
}
</style>

