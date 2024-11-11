<template>
    <div>
        <p class="color-text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        startColor: {
            type: String,
            default: 'red'
        },
        endColor: {
            type: String,
            default: 'blue'
        }
    },
    mounted() {
        this.animateText();
    },
    methods: {
        animateText() {
            const textElement = this.$el.querySelector('.color-text');
            textElement.style.color = this.startColor;
            setTimeout(() => {
                textElement.style.color = this.endColor;
            }, 100); // Delay to trigger the animation
        }
    }
}
</script>

<style scoped>
.color-text {
    transition: color 1s ease-in-out;
}
</style>