<template>
    <div class="container">
      <h1>Ejemplos de elementos de interfaz de usuario</h1>
      <br><hr><br>
  
      <UiAccordionQuestionAnswer 
        v-for="(item, index) in faqList" 
        :key="index" 
        :question="item.question" 
        :answer="item.answer" 
      />
      <br><hr><br>
      <UiCenteredTitle title="Texto centrado" />
      <br><hr><br>
      <UiClipboardContainer title="Texto a copiar" />

      <br><hr><br>
      <UiIncreasingNumber :finalNumber="2024"/>
      <br><hr><br>
      <UiPercentageBar :percentage="25" />
      <br><hr><br>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  const faqList = [
    {
      question: '¿Qué es Nuxt?',
      answer: 'Nuxt es un framework de Vue.js que facilita la creación de aplicaciones universales.'
    },
    {
      question: '¿Cómo instalar Nuxt?',
      answer: 'Puedes instalar Nuxt usando npm o yarn: npm install nuxt o yarn add nuxt.'
    },
    // Añade más preguntas y respuestas según sea necesario
  ];
  </script>
  
  <style scoped>
  /* Tu CSS aquí si es necesario */
  </style>
  