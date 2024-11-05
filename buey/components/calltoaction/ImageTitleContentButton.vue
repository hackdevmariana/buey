<template>
  <div class="image-container">
    <img :src="image" alt="" class="image">
    <div class="overlay">
      <h1 class="title">{{ title }}</h1>
      <p class="content">{{ content }}</p>
      <a :href="linkButton" class="button">{{ textButton }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    content: String,
    textButton: String,
    linkButton: String
  }
}
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
}

.image {
  width: 100%;
  height: auto;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.title {
  font-size: 3rem;
}

.content {
  font-size: 2rem;
}

.button {
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #ddd;
}
</style>
