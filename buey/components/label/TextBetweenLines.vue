
<template>
  <div class="text-container">
    <div class="line"></div>
    <span>{{ text }}</span>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style>
.text-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.text-container span {
  font-size: 3rem;
  text-align: center;
}

.line {
  flex-grow: 1;
  height: 2px;
  background-color: var(--color-primary);
  margin: 10px 40px;
}
</style>
