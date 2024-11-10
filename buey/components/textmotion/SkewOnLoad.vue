<template>
    <div>
        <p class="skew-text">{{ text }}</p>
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
    mounted() {
        this.animateText();
    },
    methods: {
        animateText() {
            const textElement = this.$el.querySelector('.skew-text');
            textElement.style.transform = 'skewX(20deg)';
            setTimeout(() => {
                textElement.style.transform = 'skewX(0deg)';
            }, 100); // Delay to trigger the animation
        }
    }
}
</script>

<style scoped>
.skew-text {
    transition: transform 1s ease-in-out;
}
</style>