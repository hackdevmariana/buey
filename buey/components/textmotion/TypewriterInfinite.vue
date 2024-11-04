<template>
  <div class="typewriter">
    {{ displayText }}
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
      displayText: '',
      index: 0,
      isDeleting: false
    };
  },
  mounted() {
    this.startTypingEffect();
  },
  methods: {
    startTypingEffect() {
      const typingSpeed = 150;
      const deletingSpeed = 100;
      const pauseTime = 2000;

      const type = () => {
        if (this.isDeleting) {
          this.displayText = this.text.substring(0, this.displayText.length - 1);
        } else {
          this.displayText = this.text.substring(0, this.index + 1);
        }

        if (!this.isDeleting && this.displayText === this.text) {
          setTimeout(() => this.isDeleting = true, pauseTime);
        } else if (this.isDeleting && this.displayText === '') {
          this.isDeleting = false;
          this.index = 0;
          setTimeout(() => type(), pauseTime);
          return;
        }

        const speed = this.isDeleting ? deletingSpeed : typingSpeed;
        this.index += this.isDeleting ? -1 : 1;
        setTimeout(type, speed);
      };

      type();
    }
  }
};
</script>

<style scoped>
.typewriter {
  display: inline;
  font-family: var(--font-typewriter);
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}
</style>

