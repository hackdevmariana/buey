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
          <!-- Botón de cierre y botón para copiar -->
          <button @click="toggleModal" class="close-button">×</button>
          <button @click="copyCode" class="copy-button">
            📋 Copiar
          </button>
  
          <!-- Componente de Prism para resaltar el código -->
          <prism language="html">
            <pre>{{ code }}</pre>
          </prism>
          
          <!-- Mensaje de éxito al copiar -->
          <p v-if="copySuccess" class="copy-success">¡Código copiado!</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import Prism from 'vue-prism-component';
  import 'prismjs';
  import 'prismjs/themes/prism.css';
  
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
  const copySuccess = ref(false);
  
  // Alternar el estado de visibilidad del modal
  const toggleModal = () => {
    showModal.value = !showModal.value;
    copySuccess.value = false; // Restablecer el mensaje de éxito al abrir el modal
  };
  
  // Función para copiar el código al portapapeles
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(props.code);
      copySuccess.value = true;
      setTimeout(() => {
        copySuccess.value = false;
      }, 2000); // Ocultar el mensaje de éxito después de 2 segundos
    } catch (err) {
      console.error("Error al copiar el código: ", err);
    }
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
  
  /* Estilos del botón de cerrar */
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  /* Estilos del botón de copiar */
  .copy-button {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
  }
  
  .copy-button:hover {
    background: #0056b3;
  }
  
  /* Mensaje de éxito al copiar */
  .copy-success {
    color: green;
    font-size: 0.9rem;
    margin-top: 10px;
    text-align: center;
  }
  </style>
  