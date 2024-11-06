<template>
    <div class="user-profile">
      <img :src="avatar" alt="avatar" class="avatar" />
      <h3>{{ name }}</h3>
      <p>{{ bio }}</p>
      <button v-if="ctaText" @click="onFollow">{{ ctaText }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      avatar: {
        type: String,
        default: 'https://raw.githubusercontent.com/hackdevmariana/works-images/refs/heads/master/lecturer.jpg'
      },
      name: {
        type: String,
        default: 'User Name'
      },
      bio: {
        type: String,
        default: 'User bio goes here.'
      },
      ctaText: {
        type: String,
        default: 'Follow'
      }
    },
    methods: {
      onFollow() {
        this.$emit('follow');
      }
    }
  }
  </script>
  