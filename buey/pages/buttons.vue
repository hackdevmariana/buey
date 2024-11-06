<template>
    <div class="button-container">
      <!-- Ejemplo 1: Usando todos los valores personalizados -->
      <ButtonWithIcon
        icon="ph:heart"
        title="Favoritos"
        text="Accede a tus favoritos"
        color="#e74c3c"
        colorHover="#c0392b"
        link="https://www.example.com/favorites"
      />
  
      <!-- Ejemplo 2: Usando algunos valores por defecto -->
      <ButtonWithIcon
        title="Perfil"
        text="Accede a tu perfil"
        color="#2ecc71"
        colorHover="#27ae60"
        link="https://www.example.com/profile"
      />
  
      <!-- Ejemplo 3: Usando todos los valores por defecto -->
      <WithIcon />
    </div>
  </template>
  
  <script setup>


  </script>
  
  <style scoped>
  .button-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  </style>
  