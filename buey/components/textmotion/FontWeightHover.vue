<template>
    <div>
        <p class="font-weight-text">{{ text }}</p>
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
.font-weight-text {
    font-weight: 400;
    transition: font-weight 0.5s ease-in-out;
}

.font-weight-text:hover {
    font-weight: 700;
}
</style>