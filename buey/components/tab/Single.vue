<template>
    <div class="tabs">
      <div class="tab-header">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="tab-content">
        <slot :name="`tab-${activeTab}`"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabs: {
        type: Array,
        default: () => [{ label: 'Tab 1' }, { label: 'Tab 2' }]
      }
    },
    data() {
      return {
        activeTab: 0
      };
    }
  }
  </script>
  