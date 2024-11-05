<template>
  <div class="container-100">
    <div class="row d-flex justify-content-between">
      <div class="col-xl-4 col-lg-6 col-md-12 mb-4 mx-0">
        <div class="pastel-red">
          1
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12 mb-4 mx-0">
        <div class="pastel-green">
          2
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12 mb-4 mx-0">
        <div class="pastel-blue">
          3
        </div>
      </div>
      <!-- Repite las columnas según sea necesario -->
    </div>
  </div>
</template>

<style scoped>
.container-100 {
  padding: 0;
  margin: 0;
  width: 100%;
}

.pastel-red,
.pastel-green,
.pastel-blue {
  width: 100%;
  font-size: 5rem;
  color: black;
  height: 200px;
  text-align: center;
}

.pastel-red {
  background-color: #ff8f71;
}

.pastel-green {
  background-color: #71ff92;
}

.pastel-blue {
  background-color: #71b8ff;
}
</style>