<template>
  <div class="parallax-container">
    <div class="parallax-image" :style="backgroundStyle"></div>
    <div class="parallax-content">
      <h1 class="title">{{ title }}</h1>
      <p class="content">{{ content }}</p>
      <a :href="linkButton" class="button">{{ textButton }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    content: String,
    textButton: String,
    linkButton: String
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.image})`
      }
    }
  }
}
</script>

<style scoped>
.parallax-container {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.parallax-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  transition: transform 0.3s ease;
}

.parallax-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: white;
  text-align: center;
}

.parallax-container:hover .parallax-image {
  transform: scale(1.2);
}
</style>
