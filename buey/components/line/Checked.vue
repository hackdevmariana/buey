<template>
  <div>
    <Icon name="iconoir:check-circle-solid" class="icon-ok icon" />
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.icon{
  font-size: 1.5rem;
  margin-right: .5rem;
}
</style>
