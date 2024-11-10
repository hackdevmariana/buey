<template>
    <div class="github">
        <a :href="link">
            <span class="line-github"><i class="bi bi-github"></i></span>
            {{ text }}
        </a>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: 'black'
        }
    }
}
</script>

<style scoped>
.github {
    font-size: 1.2rem;
    display: inline-block;
}
a{
    color: var(--color);
}

.line-github {
    margin-right: 0.5rem;
}

.github:hover {
    font-size: 1.5rem;
    transform: scaleX(-1);
}
</style>