
<template>
  <div class="container-total">
    <div class="column pastel-red">
      1
    </div>
    <div class="column pastel-green">
      2
    </div>
    <div class="column pastel-blue">
      3
    </div>
    <div class="column pastel-purple">
      4
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent'
}
</script>

<style scoped>
.container-total {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: stretch;
  justify-content: space-between;
}

.column {
  flex: 1 1 calc(25%); /* Calculate width for 4 columns with 10px gap */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

/* Responsive design */
@media (max-width: 1024px) {
  .column {
    flex: 1 1 calc(50% - 10px); /* Calculate width for 2 columns with 10px gap */
  }
}
</style>
