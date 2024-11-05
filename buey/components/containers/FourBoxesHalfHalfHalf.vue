<template>
  <div class="container-fluid p-0 m-0">
    <div class="row gx-0">
      <!-- Contenedor grande a la izquierda para pantallas mayores que lg -->
      <div class="col-12 col-lg-6 d-flex align-items-stretch" :class="{'my-height-lg': isLargeScreen}">
        <div class="w-100 bg-primary">
          1
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="row gx-0">
          
          <div class="col-12 d-flex align-items-stretch" :class="{'my-height-md': isLargeScreen}">
            <div class="w-100 bg-secondary">
              2
            </div>
          </div>

          <!-- Contenedores inferiores debajo del contenedor superior derecho -->
          <div class="col-6 d-flex align-items-stretch" :class="{'my-height-md': isLargeScreen}">
            <div class="w-100 bg-success">
              3
            </div>
          </div>
          <div class="col-6 d-flex align-items-stretch bg-danger" :class="{'my-height-md': isLargeScreen}">
              4

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLargeScreen() {
      // Asumiendo que 'lg' en Bootstrap es 992px
      return window.innerWidth >= 992;
    },
  },
};
</script>

<style scoped>
.my-height-lg {
  height: 444px;
}
.my-height-md {
  height: 222px;
}
@media (max-width: 991.98px) {
  .my-height-lg,
  .my-height-md {
    height: 250px;
  }
}
</style>