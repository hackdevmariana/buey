<template>
    <div class="card" :style="styleVariables">
      <div class="content">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <a :href="link" :title="titleLink" class="button">{{ textButton }}</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  
  const props = defineProps({
    title: {
      type: String,
      default: 'Default Title'
    },
    text: {
      type: String,
      default: 'This is the default description text for the card.'
    },
    textButton: {
      type: String,
      default: 'Learn More'
    },
    link: {
      type: String,
      default: '#'
    },
    titleLink: {
      type: String,
      default: 'Default Link Title'
    },
    color_1: {
      type: String,
      default: '#ff7e5f' // Color inicial del gradiente
    },
    color_2: {
      type: String,
      default: '#feb47b' // Color final del gradiente
    }
  });
  
  // Se define el estilo del componente usando las propiedades de color.
  const styleVariables = computed(() => ({
    background: `linear-gradient(to bottom, ${props.color_1}, ${props.color_2})`
  }));
  </script>
  
  <style scoped>
  .card {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  
  .content {
    max-width: 80%;
  }
  
  h2 {
    font-size: 2rem;
    margin: 0 0 10px;
  }
  
  p {
    font-size: 1.5rem;
    margin: 0 0 20px;
  }
  
  .button {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  </style>
  