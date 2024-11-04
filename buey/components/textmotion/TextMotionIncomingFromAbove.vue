<template>
  <div class="slider" v-show="isVisible" ref="slider">
    <div class="slider-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
      const sliderText = this.$refs.slider.querySelector('.slider-text');
      sliderText.style.opacity = '1';
      sliderText.style.transform = 'translateY(0)';
    }, 1000);
  }
}
</script>

<style scoped>
.slider {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}


.slider-text {
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%) translateY(-100%); /* Ajustar para centrar */
  transition: opacity 1s, transform 1s;
  transform-origin: center;
  text-align: center;
}

</style>
