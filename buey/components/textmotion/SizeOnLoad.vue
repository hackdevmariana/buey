<template>
    <div>
        <p class="animated-text">{{ text }}</p>
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
            const textElement = this.$el.querySelector('.animated-text');
            textElement.style.fontSize = '1rem';
            setTimeout(() => {
                textElement.style.fontSize = '2rem';
            }, 100); // Delay to trigger the animation
        }
    }
}
</script>

<style scoped>
.animated-text {
    transition: font-size 1s ease-in-out;
}
</style>