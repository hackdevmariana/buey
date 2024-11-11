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
            default: 'black'
        },
        hoverColor: {
            type: String,
            default: 'green'
        }
    }
}
</script>

<style scoped>
.color-text {
    color: var(--start-color, black);
    transition: color 0.5s ease-in-out;
}

.color-text:hover {
    color: var(--hover-color, green);
}
</style>