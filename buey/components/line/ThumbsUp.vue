<template>
  <div>
    <Icon name="ion:md-thumbs-up" class="icon"/>
    <span v-if="!link">{{ text }}</span>
    <a v-else :href="link" class="link">{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.icon{
  font-size: 1.5rem;
  margin-right: .5rem;
}

.link{
  text-decoration: none;
}
</style>
