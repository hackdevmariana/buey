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
    }
}
</script>

<style scoped>
.animated-text {
    font-size: 1rem;
    transition: font-size 0.5s ease-in-out;
}

.animated-text:hover {
    font-size: 2rem;
}
</style>