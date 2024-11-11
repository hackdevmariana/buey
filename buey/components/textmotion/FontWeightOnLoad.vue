<template>
    <div>
        <p class="font-weight-text">{{ text }}</p>
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
            const textElement = this.$el.querySelector('.font-weight-text');
            textElement.style.fontWeight = '100';
            setTimeout(() => {
                textElement.style.fontWeight = '700';
            }, 100); // Delay to trigger the animation
        }
    }
}
</script>

<style scoped>
.font-weight-text {
    transition: font-weight 1s ease-in-out;
}
</style>