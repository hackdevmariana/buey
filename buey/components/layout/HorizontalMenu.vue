<template>
  <ul class="menu-list">
  <li class="menu-item" v-for="(item, index) in menuItems" :key="index">
  <NuxtLink :to="item.link" class="link-item">
  <i :class="item.iconClass" :style="{ color: item.iconColor }"></i> 
  {{ item.label }}
  </NuxtLink>
  </li>
  </ul>
  </template>

<script setup>
const menuItems = [
  {
    link: '/interactions',
    iconClass: 'bi bi-gear-fill',
    iconColor: 'primary',
    label: 'Componentes con interacción',
  },
  {
    link: '/emojis',
    iconClass: 'bi bi-emoji-smile-fill',
    iconColor: 'warning',
    label: 'Emojis',
  },
  {
    link: '/effectsletters',
    iconClass: 'bi bi-type',
    iconColor: 'success',
    label: 'Efectos con letras',
  },
  {
    link: '/calltoactions',
    iconClass: 'bi bi-megaphone-fill',
    iconColor: 'danger',
    label: 'Llamadas a la acción',
  },
  {
    link: '/gridsystem',
    iconClass: 'bi bi-grid-3x3-gap-fill',
    iconColor: 'info',
    label: 'Tipos de grids',
  },
  {
    link: '/images',
    iconClass: 'bi bi-image-fill',
    iconColor: 'secondary',
    label: 'Efectos sobre imágenes',
  },
  {
    link: '/lists',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Listados',
  },
  {
    link: '/banner',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Banners',
  },
  {
    link: '/users',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Información de usuarios',
  },
  {
    link: '/date',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Fechas y eventos',
  },
  {
    link: '/icons',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Iconos',
  },
  {
    link: '/inline',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'En linea (in line)',
  },
  {
    link: '/list',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Listados de eventos',
  },
  {
    link: '/buttons',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Botones',
  },
  {
    link: '/dropdown',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Dropdown',
  },
  {
    link: '/tabs',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Pestañas',
  },
  {
    link: '/modals',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Modales',
  },
  {
    link: '/poster',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Mostrar poster',
  },
  {
    link: '/cards',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Tarjetas (cards)',
  },
  {
    link: '/textmotion',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Texto en movimiento',
  },
  {
    link: '/ui',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Elementos UI',
  },
  {
    link: '/youtubeid',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Mostrar vídeo de Youtube por ID',
  },
  {
    link: '/youtubeurl',
    iconClass: 'bi bi-list-ul',
    iconColor: 'dark',
    label: 'Mostrar vídeo de Youtube por URL',
  },
];
</script>

<style scoped>
.menu-list {
list-style: none;
padding: 0;
margin: 0;
display: grid;
grid-template-columns: repeat(6, 1fr);
gap: 1rem;
}

.menu-item {
display: flex;
justify-content: center;
}

.link-item {
display: flex;
align-items: center;
text-decoration: none;
font-size: 1rem;
}
</style>
