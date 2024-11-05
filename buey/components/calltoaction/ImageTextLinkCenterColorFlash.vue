<template>
  <div class="container" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="overlay"></div>
    <a :href="link" class="content">
      <p class="text">
        <span :class="{ 'colorFlash': iscolorFlash }">{{ text }}</span>
        <Icon name="flowbite:angle-right-outline" class="icon" />
      </p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    image: String,
    link: String
  },
  data() {
    return {
      iscolorFlash: false
    };
  },
  mounted() {
    setInterval(() => {
      this.iscolorFlash = !this.iscolorFlash;
    }, 10000); // Cambiar la clase cada 5 segundos
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 165px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.container .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  filter: brightness(50%);
  z-index: 1;
}

.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  z-index: 2;
}

.text {
  font-size: 4.5rem;
  font-weight: bold;
  color: white;
  margin-right: 10px;
}

.text span {
  display: inline-block;
}

.icon {
  animation: moveIcon 3s linear infinite;
  font-size: 4.5rem;
  font-weight: bold;
  color: white;
}

@keyframes moveIcon {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX(0);
  }
}

.colorFlash {
  animation: colorFlash 5s ease-in-out;
}

@keyframes colorFlash {
0%, 100% { color: white; }
50% { color: yellow; }
}

@media (max-width: 720px) {
  .text {
    font-size: 1.1rem;
  }
}
</style>
