<template>
  <div class="parallax-container" ref="container">
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
  data() {
    return {
      containerHeight: 0
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.image})`,
        height: `${this.containerHeight}px`,
        backgroundAttachment: 'fixed', // Mantener la imagen fija al hacer scroll
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      };
    }
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  }
}
</script>

<style scoped>
.parallax-container {
  position: relative;
  width: 100%;
  height: 500px; /* Ajustar según sea necesario */
  overflow: hidden;
}

.parallax-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
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
</style>
