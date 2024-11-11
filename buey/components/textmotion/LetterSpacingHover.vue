<template>
    <div :style="style" @mouseover="hover" @mouseleave="leave">{{ text }}</div>
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
    methods: {
        hover() {
            this.style.letterSpacing = '5px';
        },
        leave() {
            this.style.letterSpacing = '0px';
        }
    }
};
</script>

<style scoped>
div {
    font-size: 24px;
}
</style>