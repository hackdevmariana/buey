<template>
  <div>
    <input type="text" v-model="colorInput" placeholder="Escribe un color" />
    <div :style="{ backgroundColor: colorInput, width: '100px', height: '100px' }"></div>
    <div>
      <div>Hexadecimal: {{ toHex(colorInput) }}</div>
      <button @click="copyToClipboard(toHex(colorInput))">Copiar</button>
    </div>
    <div>
      <div>RGB: {{ toRGB(colorInput) }}</div>
      <button @click="copyToClipboard(toRGB(colorInput))">Copiar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorInput: '',
    };
  },
  methods: {
    toHex(color) {
      // Convert color to hexadecimal (implementation depends on input format)
      // For simplicity, let's assume the input is always a valid CSS color string
      const ctx = document.createElement('canvas').getContext('2d');
      ctx.fillStyle = color;
      return ctx.fillStyle.toUpperCase();
    },
    toRGB(color) {
      // Convert color to RGB (implementation depends on input format)
      // For simplicity, let's assume the input is always a valid CSS color string
      const ctx = document.createElement('canvas').getContext('2d');
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      const rgb = ctx.getImageData(0, 0, 1, 1).data;
      return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(
        () => {
          console.log('Text copied to clipboard');
        },
        (err) => {
          console.error('Could not copy text: ', err);
        }
      );
    },
  },
};
</script>

