<template>
    <div :style="style" @mouseover="hover" @mouseleave="leave">{{ text }}</div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Hola, mundo'
        },
        colorStart: {
            type: String,
            default: '#ffffff'
        },
        colorEnd: {
            type: String,
            default: '#ffcc00'
        }
    },
    data() {
        return {
            style: {
                transition: 'background-color 0.5s ease',
                backgroundColor: this.colorStart
            }
        };
    },
    methods: {
        hover() {
            this.style.backgroundColor = this.colorEnd;
        },
        leave() {
            this.style.backgroundColor = this.colorStart;
        }
    }
};
</script>

<style scoped>
div {
    font-size: 24px;
    padding: 10px;
}
</style>