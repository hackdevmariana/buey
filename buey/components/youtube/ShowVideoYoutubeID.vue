<template>
  <div class="video-container">
    <iframe 
      :src="videoUrl" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      class="video-iframe"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      required: true
    }
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.video}`;
    }
  }
}
</script>

<style>
.video-container {
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

