<template>
    <a :href="link" class="button" :style="{ backgroundColor: color }">
      <div class="icon" v-if="icon">
        <Icon :name="icon" />
      </div>
      <div class="content">
        <div class="title">{{ title }}</div>
        <div class="text">{{ text }}</div>
      </div>
    </a>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    icon: { type: String, default: 'ph:star' },  
    title: { type: String, default: 'Título por defecto' }, 
    text: { type: String, default: 'Texto por defecto' }, 
    color: { type: String, default: '#3498db' },        
    colorHover: { type: String, default: '#2980b9' },   
    link: { type: String, default: '#' },               
  });
  </script>
  
  <style scoped>
  .button {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 8px;
    text-decoration: none;
    color: white;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: v-bind(colorHover);
  }
  
  .icon {
    font-size: 2rem;
    margin-right: 0.75rem;
  }
  
  .content {
    display: flex;
    flex-direction: column;
  }
  
  .title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .text {
    font-size: 1rem;
  }
  </style>
  