<template>
  <div class="container-100">
    <div class="image-container">
      <img :src="image" alt="image">
      <div class="text-container">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    text: String
  }
}
</script>

<style scoped>
.container {
  width: 100%;
}
.image-container {
  position: relative;
  width: 100%;
  height: 270px;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
}
.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}
.text-container h2 {
  font-size: 3rem;
  font-weight: bold;
}
.text-container p {
  font-size: 2rem;
}
@media (max-width: 720px) {
  .image-container {
    height: 165px;
  }
}
</style>

