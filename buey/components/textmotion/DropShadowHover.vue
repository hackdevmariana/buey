<template>
    <div>
        <p class="drop-shadow-text">{{ text }}</p>
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
            const textElement = this.$el.querySelector('.drop-shadow-text');
            textElement.style.filter = 'drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.5))';
            setTimeout(() => {
                textElement.style.filter = 'drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))';
            }, 100); // Delay to trigger the animation
        }
    }
}
</script>

<style scoped>
.drop-shadow-text {
    transition: filter 1s ease-in-out;
}
</style>