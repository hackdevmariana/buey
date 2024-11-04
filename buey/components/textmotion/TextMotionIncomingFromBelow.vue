<template>
  <div class="slider">
    <div class="slider-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  mounted() {
    setTimeout(() => {
      const sliderText = this.$el.querySelector('.slider-text');
      sliderText.style.opacity = '1';
      sliderText.style.transform = 'translate(-50%, 50%)'; 
      setTimeout(() => {
        sliderText.style.transition = 'transform 1s ease-out';
        sliderText.style.transform = 'translate(-50%, -200%)';
      }, 100);
    }, 2000);
  }
}
</script>

<style>
.slider {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.slider-text {
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  font-family: var(--font-slider);
  font-weight: bolder;
  text-transform: uppercase;
  color: black;
  transform: translateY(100%);
  transition: opacity 1s;
  transition-delay: 0.2s;
  transform-origin: bottom;
  text-align: center;
}
</style>
