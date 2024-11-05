<template>
    <div class="card">
      <Icon v-if="iconName" :name="iconName" class="icon" />
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { Icon } from '#components'; // Importa Icon desde Nuxt UI
  
  const props = defineProps({
    iconName: {
      type: String,
      default: 'zondicons:star' // Icono predeterminado si no se pasa uno
    },
    title: {
      type: String,
      default: 'Default Title'
    },
    text: {
      type: String,
      default: 'This is the default text for the card component.'
    }
  });
  </script>
  
  <style scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px;
    width: 100%;
  }
  
  .icon {
    font-size: 50px; /* Tamaño del icono */
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 10px;
  }
  
  p {
    font-size: 1rem;
    margin: 0;
  }
  </style>
  