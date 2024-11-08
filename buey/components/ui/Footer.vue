<template>
    <footer class="footer">
    <div class="container">
    <div class="inline-components">
    <LineCopyleft text="Yo mismo" link="https://google.es" />
    <LineCopyleft text="Yo mismo" link="https://google.es" />
    </div>
    </div>
    </footer>
    </template>
    
    <script setup>
    // Puedes incluir props o composición lógica aquí si fuera necesario
    </script>
    
    <style scoped>
    .footer {
    width: 100%;
    padding: 1rem;
    background-color: #333;
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center; /* Centra los elementos horizontalmente */
    align-items: center;
    }
    
    .inline-components {
    display: flex;
    justify-content: space-between;
    width: 100%;
    }
    
    .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    }
    </style>