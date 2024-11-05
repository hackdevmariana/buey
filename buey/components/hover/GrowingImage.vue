<template>
  <div class="image-container">
    <a href="https://google.es">
    <img :src="image" alt="Image" class="image"/>
  </a>
  </div>
</template>

<script>
export default {
  props: {
    image: {
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0%;
  margin: 0%;
}

.image {
  transition: transform 0.3s ease;
  max-width: 100%;
  max-height: 100%;
}

.image-container:hover .image {
  transform: scale(1.3);
}
</style>
