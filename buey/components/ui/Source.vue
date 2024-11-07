<template>
    <div>
      <!-- Botón para abrir el modal -->
      <button @click="toggleModal" class="source-button">
        <span class="code-icon">👨‍💻</span>
        {{ sourceText }}
      </button>
  
      <!-- Modal con el código resaltado -->
      <div v-if="showModal" class="modal-overlay" @click.self="toggleModal">
        <div class="modal-content">
          <button @click="toggleModal" class="close-button">×</button>
          <!-- Componente de Prism para resaltar el código -->
          <prism language="html">
            <pre>{{ code }}</pre>
          </prism>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import Prism from 'vue-prism-component';
  import 'prismjs';
  import 'prismjs/themes/prism.css'; // Importa el tema de prismjs para estilos básicos
  
  const props = defineProps({
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: 'en'
    }
  });
  
  const showModal = ref(false);
  
  // Alternar el estado de visibilidad del modal
  const toggleModal = () => {
    showModal.value = !showModal.value;
  };
  
  // Textos en varios idiomas para el botón
  const sourceTexts = {
    en: "Source code",
    es: "Código fuente",
    fr: "Code source",
    de: "Quellcode",
    it: "Codice sorgente",
    pt: "Código-fonte"
  };
  
  const sourceText = computed(() => sourceTexts[props.language] || sourceTexts.en);
  </script>
  
  <style scoped>
  /* Estilos del botón */
  .source-button {
    display: inline-flex;
    align-items: center;
    color: #007bff;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
  }
  
  .source-button .code-icon {
    margin-right: 0.3rem;
    transition: transform 0.2s ease;
  }
  
  .source-button:hover .code-icon {
    transform: scale(1.2);
  }
  
  /* Estilos del modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    max-width: 90%;
    max-height: 80%;
    overflow-y: auto;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;
  }
  </style>
  