<template>
    <div>
        <p class="rotate-text">{{ text }}</p>
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
            const textElement = this.$el.querySelector('.rotate-text');
            textElement.style.transform = 'rotate(0deg)';
            setTimeout(() => {
                textElement.style.transform = 'rotate(360deg)';
            }, 100); // Delay to trigger the animation
        }
    }
}
</script>

<style scoped>
.rotate-text {
    transition: transform 1s ease-in-out;
}
</style>