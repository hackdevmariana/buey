<template>
    <div 
      @click="toggleDropdown" 
      class="dropdown-container" 
      :aria-expanded="isOpen" 
      aria-haspopup="true"
    >
        <img :src="imageSrc" alt="Image" class="dropdown-image" />
        <p class="dropdown-text">{{ text }}</p>
        <transition name="slide-fade">
            <div v-if="isOpen" class="dropdown-options">
                <ul>
                    <li v-for="(item, index) in menuItems" :key="index">
                        <a :href="item.link">{{ item.textLink }}</a>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    imageSrc: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    menuItems: {
        type: Array,
        required: true,
        validator: (items) =>
            items.every(item => 'link' in item && 'textLink' in item)
    }
});

const isOpen = ref(false);
const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.dropdown-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.dropdown-image {
    width: 100px;
    height: 100px;
    border-radius: 50%; /* Redondear la imagen */
    object-fit: cover; /* Asegura que la imagen mantenga su proporción */
    margin-right: 10px; /* Espacio entre la imagen y el texto */
}

.dropdown-text {
    font-size: 1.2rem;
    font-weight: 500;
}

.dropdown-options {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 1;
    transform: translateY(0);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px); /* Aparece desde un poco más arriba */
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    opacity: 1;
    transform: translateY(0); /* Posición final sin desplazamiento */
}
</style>
