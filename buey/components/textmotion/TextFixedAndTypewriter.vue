<template>
  <div class="typewriter-container">
    <span class="static-text">{{ text }}</span>
    <span class="animated-text">{{ currentAnimatedText }}</span>
    <span class="cursor">|</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    animated1: {
      type: String,
      default: ''
    },
    animated2: {
      type: String,
      default: ''
    },
    animated3: {
      type: String,
      default: ''
    },
    animated4: {
      type: String,
      default: ''
    },
    animated5: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentAnimatedText: '',
      animatedTexts: [],
      currentTextIndex: 0,
      isDeleting: false,
      typingSpeed: 150,
      deletingSpeed: 50
    };
  },
  mounted() {
  this.animatedTexts = [this.animated1, this.animated2, this.animated3, this.animated4, this.animated5];
  this.animatedTexts = this.animatedTexts.filter(text => text.trim() !== '');
  this.typeWriterEffect();
},

  methods: {
    typeWriterEffect() {
      const current = this.currentTextIndex % this.animatedTexts.length;
      const fullText = this.animatedTexts[current];

      if (this.isDeleting) {
        this.currentAnimatedText = fullText.substring(0, this.currentAnimatedText.length - 1);
      } else {
        this.currentAnimatedText = fullText.substring(0, this.currentAnimatedText.length + 1);
      }

      if (!this.isDeleting && this.currentAnimatedText === fullText) {
        setTimeout(() => this.isDeleting = true, 2000);
      } else if (this.isDeleting && this.currentAnimatedText === '') {
        this.isDeleting = false;
        this.currentTextIndex++;
      }

      const timeout = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      setTimeout(() => this.typeWriterEffect(), timeout);
    }
  }
}
</script>

<style scoped>
.typewriter-container {
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
}

.static-text {
  margin-right: 0.5rem;
}

.animated-text {
  min-height: 1em;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  50.1%, 100% { opacity: 0; }
}
</style>
