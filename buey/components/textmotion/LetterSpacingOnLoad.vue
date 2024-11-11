<template>
    <div :style="style">{{ text }}</div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Hola, mundo'
        }
    },
    data() {
        return {
            style: {
                transition: 'letter-spacing 0.5s ease',
                letterSpacing: '0px'
            }
        };
    },
    mounted() {
        this.style.letterSpacing = '5px';
    }
};
</script>

<style scoped>
div {
    font-size: 24px;
}
</style>