<template>
    <div class="card" :style="{ backgroundColor: backgroundColor }">
      <div class="card-icon" v-if="icon">
        <img :src="icon" alt="icon" />
      </div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <button v-if="ctaText" @click="onButtonClick">{{ ctaText }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      icon: String,
      title: {
        type: String,
        default: 'Default Title'
      },
      description: {
        type: String,
        default: 'This is a default description.'
      },
      ctaText: String,
      backgroundColor: {
        type: String,
        default: '#fff'
      }
    },
    methods: {
      onButtonClick() {
        this.$emit('button-click');
      }
    }
  }
  </script>
  