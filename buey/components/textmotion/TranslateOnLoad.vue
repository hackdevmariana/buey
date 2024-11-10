<template>
    <div>
        <p class="translate-text">{{ text }}</p>
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
            const textElement = this.$el.querySelector('.translate-text');
            textElement.style.transform = 'translateX(500px)';
            setTimeout(() => {
                textElement.style.transform = 'translateX(0)';
            }, 100); // Delay to trigger the animation
        }
    }
}
</script>

<style scoped>
.translate-text {
    transition: transform 2s ease-in-out;
}
</style>