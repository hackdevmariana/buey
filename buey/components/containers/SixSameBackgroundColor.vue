<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="i in 6" :key="i" class="col-lg-2 col-md-4 col-sm-6 col-xs-12 my-col">
        <div class="content">
          <h1>{{ i }}</h1>
          <p>Contenedor</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent'
}
</script>

<style scoped>
.my-col {
  background-color: var(--color-secondary);
  border-right: 1px solid var(--color-border);
  text-align: center;
  padding: 1rem;

}

.my-col:last-child {
  border-right: none;
}

.content h1 {
  font-size: 3rem;
}

@media (max-width: 991px) {
  .my-col {
    border-bottom: 1px solid var(--color-border);
  }
  .my-col:nth-child(3n) {
    border-right: none;
  }
}
</style>
