<template>
  <div>
    <Icon name="ion:person-sharp" class="icon" />
    <span v-if="link">
      <a :href="link" class="link">{{ text }}</a>
    </span>
    <span v-else>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
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
