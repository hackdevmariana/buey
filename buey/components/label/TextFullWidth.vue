<template>
  <div class="text-container" :style="{ fontSize: calculatedFontSize }">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    calculatedFontSize() {
      // Calcular el número de caracteres
      const numberOfCharacters = this.text.length;
      // Dividir 100 entre el número de caracteres
      // y limitar el tamaño mínimo y máximo de la fuente
      const fontSize = Math.min(Math.max(100 / numberOfCharacters, 1), 20);
      // Devolver el valor en vw
      return `${fontSize}vw`;
    }
  }
}
</script>

<style scoped>
.text-container {
  width: 100%;
  border-top: 2px solid var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: .4rem;
}
</style>
