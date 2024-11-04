<template>
  <div class="image-container">
    <img :src="image" alt="Image" class="darken-image"/>
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

<style>
.image-container {
  width: 100%;
  height: 100%;
}

.darken-image {
  width: 100%;
  height: 100%;
  filter: brightness(1.5);
  transition: filter 0.3s ease;
}

.darken-image:hover {
  filter: brightness(1);
}
</style>


