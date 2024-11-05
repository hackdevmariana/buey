<template>
  <div>
    <button @click="generarPaleta">Generar Paleta de Colores</button>
    <div v-if="paleta">
      <div
        v-for="(valor, nombre) in paleta"
        :key="nombre"
        :style="{ backgroundColor: valor.hex, color: valor.contraste }"
        class="color-container"
      >
        {{ nombre }}: {{ valor.hex }};
      </div>
      <button @click="copiarAlPortapapeles">Copiar CSS</button>
      <pre>{{ cssVariables }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paleta: null,
      cssVariables: '',
    };
  },
  methods: {
    generarColorAleatorio(oscuridad) {
      const generarHex = (min, max) => {
        const valor = Math.floor(Math.random() * (max - min + 1)) + min;
        return valor.toString(16).padStart(2, '0');
      };
      const r = oscuridad === 'oscuro' ? generarHex(0, 100) : oscuridad === 'claro' ? generarHex(155, 255) : generarHex(0, 255);
      const g = oscuridad === 'oscuro' ? generarHex(0, 100) : oscuridad === 'claro' ? generarHex(155, 255) : generarHex(0, 255);
      const b = oscuridad === 'oscuro' ? generarHex(0, 100) : oscuridad === 'claro' ? generarHex(155, 255) : generarHex(0, 255);
      return {
        hex: `#${r}${g}${b}`,
        rgb: `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`,
        contraste: this.calcularContraste(r, g, b),
      };
    },
    calcularContraste(r, g, b) {
      // Calcula el brillo del color para determinar si el texto debería ser claro u oscuro
      const brillo = (parseInt(r, 16) * 299 + parseInt(g, 16) * 587 + parseInt(b, 16) * 114) / 1000;
      return brillo > 128 ? '#000000' : '#ffffff';
    },
    generarPaleta() {
      this.paleta = {
        'color-primary': this.generarColorAleatorio(),
        'color-secondary': this.generarColorAleatorio(),
        'color-tertiary': this.generarColorAleatorio(),
        'color-dark-primary': this.generarColorAleatorio('oscuro'),
        'color-dark-secondary': this.generarColorAleatorio('oscuro'),
        'color-dark-tertiary': this.generarColorAleatorio('oscuro'),
        'color-light-primary': this.generarColorAleatorio('claro'),
        'color-light-secondary': this.generarColorAleatorio('claro'),
        'color-light-tertiary': this.generarColorAleatorio('claro'),
        'color-light-theme': this.generarColorAleatorio('claro'),
        'color-dark-theme': this.generarColorAleatorio('oscuro'),
        'color-border': this.generarColorAleatorio(),
      };
      this.generarCssVariables();
    },
    generarCssVariables() {
      this.cssVariables = Object.entries(this.paleta)
        .map(([nombre, valor]) => {
          const nombreRgb = nombre + '-rgb';
          return `--${nombre}: ${valor.hex};\n--${nombreRgb}: ${valor.rgb};`;
        })
        .join('\n');
    },
    copiarAlPortapapeles() {
      const textArea = document.createElement('textarea');
      textArea.value = this.cssVariables;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('CSS copiado al portapapeles');
    },
  },
};
</script>

<style>
.color-container {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
}
</style>
