<template>
  <div class="image-container">
    <img :src="image" alt="Imagen" class="image"/>
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
  overflow: hidden;
}

.image {
  width: 100%;
  transition: transform .5s ease;
}

.image:hover {
  transform: translateY(-10px);
}
</style>

