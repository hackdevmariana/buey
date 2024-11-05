<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <a href="#" @click="selectItem(index)">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <transition :style="transitionStyle" name="fade" mode="out-in">
      <div v-if="selectedItem" :key="selectedItem.title" class="content">
        <div class="text">
          <h3>{{ selectedItem.title }}</h3>
          <p>{{ selectedItem.content }}</p>
        </div>
        <div class="image" v-if="showImage">
          <img :src="selectedItem.image" alt="Item image">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Item 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "/horizontal.jpg"
        },
        {
          title: "Item 2",
          content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "/vertical.jpg"
        },
        {
          title: "Item 3",
          content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "/cuadrada.jpg"
        }
      ],
      selectedItem: null,
      showImage: true,
      transitionStyle: "none" // Agregamos una propiedad para controlar el estilo de transición dinámicamente
    }
  },
  mounted() {
    this.selectedItem = this.items[0];
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    selectItem(index) {
      this.transitionStyle = "all 0.3s ease"; // Activamos la transición al cambiar de contenedor activo
      this.selectedItem = this.items[index];
    },
    handleResize() {
      this.showImage = window.innerWidth >= 720;
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 20%;
  background-color: #f4f4f4;
}

.content {
  width: 80%;
  display: flex;
  position: relative;
}

.text,
.image {
  width: 50%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li a {
  text-decoration: none;
  color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter {
  opacity: 0;
  transform: translateY(100px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

@media (max-width: 720px) {
  .image {
    display: none;
  }

  .text {
    width: 100%;
  }
}
</style>
