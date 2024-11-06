<template>
    <div v-if="visible" class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <button class="close-button" @click="close">✖</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: Boolean
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
  </script>
  