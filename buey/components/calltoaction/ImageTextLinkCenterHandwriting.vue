<template>
  <div class="container" :style="{ backgroundImage: 'url(' + image + ')' }">
  <div class="overlay"></div>
  <a :href="link" class="content">
  <p class="text nanum-brush-script-regular">
    <span v-for="(char, index) in displayText" :key="index">{{ char === ' ' ? '\u00A0' : char }}</span>
  <!-- <span v-for="(char, index) in text" :key="index" :style="{ 'animation-delay': index * 0.1 + 's' }">{{ char }}</span> -->
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
        displayText: ''
      };
    },
    mounted() {
      this.typewriterEffect();
    },
    methods: {
      typewriterEffect() {
        const text = this.text + ' '; // Asegura que el último carácter se muestre
        const speed = 100; // Velocidad de escritura en milisegundos
        const delayAfterWriting = 5000; // Tiempo de espera después de escribir el texto
        const delayAfterDeleting = 1000; // Tiempo de espera después de borrar el texto
  
        let index = 0;
        let isDeleting = false;
  
        const typeAndErase = () => {
          if (index >= text.length && !isDeleting) {
            // Si ha terminado de escribir, comienza a borrar después de la pausa
            setTimeout(() => {
              isDeleting = true;
              typeAndErase();
            }, delayAfterWriting);
          } else if (isDeleting && index === -1) {
            // Si ha terminado de borrar, comienza a escribir después de la pausa
            setTimeout(() => {
              isDeleting = false;
              typeAndErase();
            }, delayAfterDeleting);
          } else {
            // Actualiza el texto mostrado
            this.displayText = text.substring(0, index);
            if (isDeleting) {
              // Borrar un carácter
              index--;
            } else {
              // Escribir un carácter
              index++;
            }
            // Continuar el ciclo
            setTimeout(typeAndErase, speed);
          }
        };
  
        typeAndErase(); // Comienza el efecto de máquina de escribir y borrar
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap');
  
  .nanum-brush-script-regular {
  font-family: "Nanum Brush Script", cursive;
  }

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
  font-size: 6.5rem;
  font-weight: bold;
  color: white;
  margin-right: 10px;
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
.text span {
display: inline-block;
opacity: 0;
animation: handwriting 1s ease-in-out forwards;
}

@keyframes handwriting {
0% { opacity: 0; }
100% { opacity: 1; }
}

@media (max-width: 720px) {
  .text {
    font-size: 1.1rem;
  }
}
</style>
