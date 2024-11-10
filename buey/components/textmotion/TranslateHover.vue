<template>
    <div>
        <p class="translate-text">{{ text }}</p>
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
.translate-text {
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
}

.translate-text:hover {
    transform: translateX(50px);
}
</style>