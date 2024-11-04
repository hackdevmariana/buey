<template>
  <div class="image-container">
    <img :src="image" alt="Image" class="image"/>
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
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s;
}

.image:hover {
  filter: brightness(1.5);
}
</style>

