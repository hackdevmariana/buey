<template>
  <div class="containerHTHI">
    <div class="image-container">
      <img :src="image" alt="image" />
    </div>
    <div class="text-container">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
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
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      const imageContainer = document.querySelector(".image-container");
      imageContainer.style.display = window.innerWidth < 720 ? "none" : "block";
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

.text-container {
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
