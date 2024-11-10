<template>
    <div>
        <p class="skew-text">{{ text }}</p>
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
.skew-text {
    transform: skewX(0deg);
    transition: transform 0.5s ease-in-out;
}

.skew-text:hover {
    transform: skewX(-20deg);
}
</style>