<template>
  <div class="custom-container"
    :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + image + ')' }">
    <a :href="link" class="text-icon-container">
      <span class="random-text" v-html="randomizedText"></span>
      <Icon name="flowbite:angle-right-outline" class="icon" />
    </a>
  </div>
</template>

<script>

export default {
  props: {
    text: String,
    image: String,
    link: String,
  },
  data() {
    return {
      randomizedText: '',
      counter: 0,
    };
  },
  mounted() {
    this.randomizeText();
    // Inicia un intervalo para actualizar las letras aleatorias
    this.interval = setInterval(this.updateRandomText, 100); // Ajusta la velocidad de actualización según sea necesario
    // Establece un temporizador para cambiar las letras después de 5 segundos
    setTimeout(() => {
      clearInterval(this.interval); // Detiene las actualizaciones aleatorias
      this.checkAndFinalizeText(); // Finaliza el texto
    }, 500);
  },

  methods: {
    randomizeText() {
      this.randomizedText = this.text
        .split('')
        .map((char) => (Math.random() > 0.5 ? char : this.getRandomChar()))
        .join('');
    },
    updateRandomText() {
      let newText = this.randomizedText.split('');
      let randomIndex = Math.floor(Math.random() * newText.length);
      newText[randomIndex] = this.getRandomChar();
      this.randomizedText = newText.join('');
    },
    finalizeText() {
      let newText = '';
      for (let i = 0; i < this.text.length; i++) {
        newText += this.randomizedText[i] === this.text[i] ? this.text[i] : this.getRandomChar();
      }
      this.randomizedText = newText;
    },
    getRandomChar() {
      const characters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789 ';
      return characters.charAt(Math.floor(Math.random() * characters.length));
    },
    checkAndFinalizeText() {
      const originalText = this.text;
      let currentText = this.randomizedText.split('');
      let index = 0;

      const updateChar = () => {
        if (index < originalText.length) {
          if (currentText[index] !== originalText[index]) {
            currentText[index] = originalText[index];
            this.randomizedText = currentText.join('');
          }
          index++;
          setTimeout(updateChar, 50); // Ajusta la velocidad de actualización según sea necesario
        }
      };

      updateChar();
    },
  },
};

</script>

<style scoped>
.custom-container {
  width: 100%;
  height: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  position: relative;
}

.text-icon-container {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
}

.random-text {
  font-weight: bold;
  font-size: 4.5rem;
  white-space: nowrap;
}


.icon {
  animation: moveIcon 3s linear infinite;
  font-size: 4.5rem;
  font-weight: bold;
  color: white;
}

@keyframes moveIcon {
  to {
    transform: translateX(5px);
  }
}

@media (max-width: 720px) {
  .random-text {
    font-size: 1.1rem;
  }
}
</style>