<template>
  <div>
    <span class="line-copy">Copyright <span class="copy">&copy;</span> {{ new Date().getFullYear() }} </span>
    <a :href="link"> {{ text }}</a>
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
      required: true
    }
  }
}
</script>

<style scoped>
.copy{
  font-size: 1.2rem;
}
.line-copy{
  margin-right: .5rem;
}
</style>