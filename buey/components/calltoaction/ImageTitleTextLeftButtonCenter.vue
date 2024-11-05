<template>
  <div class="banner-container" :style="{ backgroundImage: 'url(' + image + ')', height: isMobile ? '270px' : '165px' }">
  <div class="content-container">
  <div class="text-container">
  <h1 class="title">{{ title }}</h1>
  <p class="text">{{ text }}</p>
  </div>
  <div class="button-container" :class="{ 'centered-button': !isMobile }">
  <a :href="linkButton" class="button">{{ textButton }}</a>
  </div>
  </div>
  </div>
  </template>

<script>
export default {
  props: {
    title: String,
    text: String,
    image: String,
    textButton: String,
    linkButton: String
  },
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 720;
    }
  }
}
</script>

<style scoped>
.banner-container {
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: aliceblue;
}

.banner-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}

.content-container {
  z-index: 1;
  text-align: center; /* Centrar el contenido */
}

.text-container {
  margin-left: 16px; /* Espacio a la izquierda */
  text-align: left; /* Alinear texto a la izquierda */
}

.title {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
}

.text {
  font-size: 1.5rem;
  margin-top: 1.1rem;
}

.button-container {
  margin-top: -60px;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
}

.button-container.centered-button {
position: absolute;
left: 50%;
}

@media (min-width: 721px) {
.banner-container {
justify-content: flex-start;
}
.content-container {
align-items: flex-start;
text-align: left;
}
.text-container {
align-self: center;
}
.button-container {
position: absolute;
transform: none;
}
}

@media (max-width: 720px) {
  .text-container {
    text-align: center; /* Centrar el texto en pantallas pequeñas */
    margin-left: 0; /* Eliminar el margen izquierdo */
  }

  .button-container {
    position: static; /* Eliminar posición absoluta */
    margin-top: 10px; /* Ajustar margen superior */
  }
}
</style>
