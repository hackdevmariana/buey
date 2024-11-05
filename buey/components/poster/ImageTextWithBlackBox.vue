<template>

  <div class="image-text-component">

    <div class="image-container">

      <img :src="image" alt="image" class="image" />

      <div class="black-box">

        <p class="text">{{ text }}</p>

      </div>

    </div>

  </div>

</template>

<script>

export default {

  props: {

    text: String,

    image: String,

  },

}

</script>

<style scoped>
.image-text-component {

  position: relative;

}

.image-container {

  position: relative;

}

.image {

  width: 100%;

  height: auto;

  object-fit: cover;

  object-position: center;

}

.black-box {

  position: absolute;

  top: -98px;

  right: -351px;

  width: 504px;

  height: 654px;

  background-color: black;

  display: flex;

  align-items: center;

  justify-content: center;

  z-index: -10;

  font-size: 2rem;

}

.text {

  color: white;

  margin-left: 200px;

}

@media (max-width: 992px) {

  .image {

    display: block;

    width: 100%;

  }

  .black-box {

    position: relative;

    top: 0;

    right: 0;

    width: 100%;

    height: auto;

  }

  .text {

    margin-left: 0;

  }

}
</style>