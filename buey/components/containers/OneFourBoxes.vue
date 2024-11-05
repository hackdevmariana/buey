<template>
  <div class="container-fluid p-0">
    <div class="row g-0">
      <div class="col-12 col-lg-6 h-250px h-lg-444px">
        <div class="pastel-red">1</div>
      </div>

      <div class="col-12 col-lg-6">
        <div class="row g-0">
          <div class="col-12 col-lg-6 h-250px h-lg-222px">
            <div class="pastel-green">2</div>
          </div>

          <div class="col-12 col-lg-6 h-250px h-lg-222px">
            <div class="pastel-blue">3</div>
          </div>
          <div class="col-12 col-lg-6 h-250px h-lg-222px">
            <div class="pastel-yellow">4</div>
          </div>

          <div class="col-12 col-lg-6 h-250px h-lg-222px">
            <div class="pastel-orange">5</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.h-444px {
  height: 444px;
}



.h-lg-222px {
  height: 222px;
}


@media (min-width: 992px) {
  .h-lg-222px {
    height: 222px;
  }

  .h-444px {
    height: 444px;
  }
}


@media (max-width: 992px) {
  .h-250px {
    height: 250px;
  }
}
</style>
