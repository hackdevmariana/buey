<template>
    <div>
        <p class="rotate-text">{{ text }}</p>
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
.rotate-text {
    transform: rotate(0deg);
    transition: transform 0.5s ease-in-out;
}

.rotate-text:hover {
    transform: rotate(360deg);
}
</style>