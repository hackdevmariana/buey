<template>
    <div>
        <p class="scale-text">{{ text }}</p>
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
            const textElement = this.$el.querySelector('.scale-text');
            textElement.style.transform = 'scale(2.5)';
            setTimeout(() => {
                textElement.style.transform = 'scale(1)';
            }, 100); // Delay to trigger the animation
        }
    }
}
</script>

<style scoped>
.scale-text {
    transition: transform 1s ease-in-out;
}
</style>