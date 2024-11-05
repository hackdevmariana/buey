<template>
    <div class="card" :style="{ backgroundImage: `url(${image})` }">
      <div class="content">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <a :href="link" :title="titleLink" class="button">{{ textButton }}</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    title: {
      type: String,
      default: 'Default Title'
    },
    text: {
      type: String,
      default: 'This is the default text description for the card.'
    },
    textButton: {
      type: String,
      default: 'Click Here'
    },
    link: {
      type: String,
      default: '#'
    },
    titleLink: {
      type: String,
      default: 'Default Link Title'
    },
    alt: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: '/path/to/default-image.jpg'
    }
  });
  </script>
  
  <script>
  export default {
    computed: {
      imageAlt() {
        // Si no se proporciona alt, usa el nombre del archivo de la imagen
        return this.alt || this.image.split('/').pop();
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    color: #000;
    background-size: cover;
    background-position: center;
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
    background-color: #007BFF;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  </style>
  