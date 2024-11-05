<template>
  <div class="containerHTHI">
    <div class="text-container">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
    <div class="image-container" v-if="showImage">
      <img :src="image" alt="image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    text: String
  },
  data() {
    return {
      showImage: true
    }
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 720) {
        this.showImage = false
      } else {
        this.showImage = true
      }
    }
  }
}
</script>

<style scoped>
.containerHTHI {
  display: flex;
  width: 100%;
}

.text-container,
.image-container {
  width: 50%;
}

.text-container{
  padding: 2rem;
}

.image-container img {
  width: 100%;
  height: auto;
}

@media (max-width: 720px) {
  .image-container {
    display: none;
  }
}
</style>

