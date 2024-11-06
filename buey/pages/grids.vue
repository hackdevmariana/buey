<script lang="ts" setup></script>

<template>
  
  <div class="container">
    <h1>Ejemplo de poster</h1>
<GridData :items="products">
    <template #default="{ item }">
      <div class="product-card">
        <img :src="item.image" alt="Product Image" />
        <h4>{{ item.name }}</h4>
        <p>{{ item.price | currency }}</p>
      </div>
    </template>
  </GridData>
  </div>
  </template>
  