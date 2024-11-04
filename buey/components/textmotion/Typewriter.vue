<template>
  <div class="typewriter">
    {{ typedText }}
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
      typedText: '',
      typingSpeed: 150,
      typingIndex: 0
    }
  },
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      if (this.typingIndex < this.text.length) {
        this.typedText += this.text.charAt(this.typingIndex);
        this.typingIndex++;
        setTimeout(this.typeText, this.typingSpeed);
      }
    }
  }
}
</script>

<style scoped>
.typewriter {
  display: inline;
  font-family: var(--font-typewriter);
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  animation: blink-caret 0.75s step-end infinite;
  color: black;
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}
</style>

