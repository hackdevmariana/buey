<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="p-3 border bg-light">
          <ImageZoomIn imageSrc="/cuadrada.jpg" />
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="p-3 border bg-light">
          <ImageBWToColor imageSrc="/cuadrada.jpg" />
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="p-3 border bg-success">
          
          <IconNumberString icon="ri:account-pin-circle-fill" number="15" text="Arremisculas" color="#009ace" />
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="p-3 border bg-light">Contenedor 4</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MyComponent'
}
</script>

<style>
@media (max-width: 576px) {
  .mb-3 {
    margin-bottom: 1rem;
  }
}
</style>

