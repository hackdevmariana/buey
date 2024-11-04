<template>
  <!-- 
    Usage: <RoundedImage imgPath="/path/to/image.jpg" :imageSize="{ width: 300, height: 300 }" :altText="Alternative text" />
  -->
  <div :class="imageClass" :style="{ width: imageSize.width + 'px', height: imageSize.height + 'px' }">
    <img ref="imageRef" :src="imgPath" :alt="altText">
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  imgPath: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    default: 'Profile Image'
  },
  imageSize: {
    type: Object,
    default: () => ({ width: 100, height: 100 })
  }
});

const imageRef = ref(null);
const imageClass = ref('');

onMounted(() => {
  const image = imageRef.value;
  if (image) {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    if (width === height) {
      imageClass.value = 'round-square';
    } else if (width < height) {
      imageClass.value = 'round-vertical-rectangle';
    } else {
      imageClass.value = 'round-horizontal-rectangle';
    }
  }
});
</script>

<style scoped>
.round-square img {
  border-radius: 50%;
}

.round-horizontal-rectangle {
  display: inline-block;
  position: relative;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  border-radius: 50%;
}

.round-horizontal-rectangle img {
  height: 100%;
  object-fit: cover;  
}

.round-vertical-rectangle {
  position: relative;
  max-width: 200px;
  max-height: 200px;
  overflow: hidden;
  border-radius: 50%;
}

.round-vertical-rectangle img {
  width: 100%;
  height: auto;
}
</style>
