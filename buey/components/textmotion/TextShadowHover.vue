<template>
    <div>
        <p class="text-shadow">{{ text }}</p>
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
.text-shadow {
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    transition: text-shadow 0.5s ease-in-out;
}

.text-shadow:hover {
    text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.9);
}
</style>