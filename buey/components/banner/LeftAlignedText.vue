<template>
  <div class="text-box">
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

<style>
.text-box {
  padding: 1rem;
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  text-align: right;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: -.2rem;
}
</style>

