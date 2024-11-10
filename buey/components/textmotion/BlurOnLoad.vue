<template>
    <div>
        <p class="blur-text">{{ text }}</p>
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
            const textElement = this.$el.querySelector('.blur-text');
            textElement.style.filter = 'blur(100px)';
            setTimeout(() => {
                textElement.style.filter = 'blur(0)';
            }, 100); // Delay to trigger the animation
        }
    }
}
</script>

<style scoped>
.blur-text {
    transition: filter 1s ease-in-out;
}
</style>