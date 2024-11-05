<template>
  <div>
    <select v-model="theme">
      <option value="light">Pastel</option>
      <option value="dark">Intenso</option>
    </select>
    <button @click="fetchColor">Obtener Color</button>
    <div v-if="color">
    <div  :style="{ backgroundColor: color.hex }" class="color-box">
    </div>
      <div class="color-info">
        <div>
          HEX: {{ color.hex }}
          <button @click="copyToClipboard(color.hex)">Copiar</button>
        </div>
        <div>
          RGB: {{ color.rgb }}
          <button @click="copyToClipboard(color.rgb)">Copiar</button>
        </div>
        <div>
          HSL: {{ color.hsl }}
          <button @click="copyToClipboard(color.hsl)">Copiar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light',
      color: null,
    };
  },
  methods: {
    fetchColor() {
      const apiUrl = `https://x-colors.yurace.pro/api/random/color/?type=${this.theme}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.color = data;
        });
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('Copiado al portapapeles');
      });
    },
  },
};
</script>

<style>
.color-box {
  width: 100px;
  height: 100px;
  margin: 10px;
}
.color-info {
  display: flex;
  flex-direction: column;
}
</style>

