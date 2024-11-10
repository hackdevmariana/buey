<template>
    <div>
        <p class="blur-text">{{ text }}</p>
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
.blur-text {
    filter: blur(5px);
    transition: filter 0.5s ease-in-out;
}

.blur-text:hover {
    filter: blur(0);
}
</style>