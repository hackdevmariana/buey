<template>
  <div class="d-flex justify-content-center" style="width: 100%;">
    <div v-for="item in dictionaries" :key="item.icon" class="icon-container">
      <a :href="item.link">
        <Icon :name="item.icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dictionaries: [
        { icon: 'icon-name-1', link: 'https://link1.com' },
        { icon: 'icon-name-2', link: 'https://link2.com' },
        // Add more dictionaries as needed
      ]
    }
  }
}
</script>

<style>
.icon-container {
  margin: 0 10px; /* Adjust spacing between icons as needed */
}
</style>
