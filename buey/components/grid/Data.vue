<template>
    <div class="data-grid">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="data-item"
      >
        <slot :item="item"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  