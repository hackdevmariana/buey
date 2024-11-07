<template>
  <a :href="url" class="download-link" target="_blank" rel="noopener noreferrer">
    <span class="arrow">⬇</span> {{ downloadText }}
  </a>
</template>

<script setup>
import { computed, toRefs } from 'vue';

// Definir props
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: "en"
  }
});

// Convertimos las props en referencias reactivas
const { url, language } = toRefs(props);

// Definir los textos de descarga por idioma
const downloadTexts = {
  en: "Download",
  es: "Descargar",
  fr: "Télécharger",
  de: "Herunterladen",
  it: "Scarica",
  pt: "Baixar"
};

// Determinar el texto de descarga basado en el idioma
const downloadText = computed(() => downloadTexts[language.value] || downloadTexts.en);
</script>

<style scoped>
.download-link {
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
}

.download-link .arrow {
  margin-right: 0.3rem;
  transition: transform 0.2s ease;
}

.download-link:hover .arrow {
  transform: scale(1.2);
}
</style>
