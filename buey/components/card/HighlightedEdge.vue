<template>
    <div class="card" :style="cardStyle">
      <img :src="image" :alt="imageAlt" class="card-image" />
      <div class="content">
        <a :href="link" :title="titleLink" class="card-link">{{ text }}</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  
  const props = defineProps({
    text: {
      type: String,
      default: 'Default Text'
    },
    link: {
      type: String,
      default: '#'
    },
    titleLink: {
      type: String,
      default: 'Default Title Link'
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/150'
    },
    alt: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: '#f9f9f9'
    },
    borderColor: {
      type: String,
      default: '#ccc' // Borde fino gris por defecto
    },
    borderColorHover: {
      type: String,
      default: '#1976d2' // Color del borde al hacer hover
    },
    borderSize: {
      type: String,
      default: '1px' // Tamaño del borde por defecto
    }
  });
  
  // Definir estilos en función de las propiedades
  const cardStyle = computed(() => ({
    '--border-color': props.borderColor,
    '--border-color-hover': props.borderColorHover,
    '--border-size': props.borderSize,
    backgroundColor: props.background
  }));
  
  // Obtener el texto alternativo de la imagen
  const imageAlt = computed(() => {
    return props.alt || props.image.split('/').pop();
  });
  </script>
  
  <style scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    border: var(--border-size) solid var(--border-color);
    transition: border-color 0.3s ease;
    background-color: var(--background);
  }
  
  .card:hover {
    border-color: var(--border-color-hover);
  }
  
  .card-image {
    width: 100%;
    max-width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  .content {
    padding: 20px;
    text-align: center;
  }
  
  .card-link {
    display: inline-block;
    font-size: 1.5rem;
    color: #333;
    text-decoration: none;
  }
  
  .card-link:hover {
    color: #000;
  }
  </style>
  