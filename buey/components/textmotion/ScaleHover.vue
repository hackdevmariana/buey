<template>
    <div>
        <p class="scale-text">{{ text }}</p>
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
.scale-text {
    transform: scale(1);
    transition: transform 0.5s ease-in-out;
}

.scale-text:hover {
    transform: scale(-1);
}
</style>