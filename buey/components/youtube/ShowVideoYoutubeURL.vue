<template>
  <div class="video-container">
    <iframe
      :src="videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
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
      const videoId = this.video.split('v=')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
}
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

