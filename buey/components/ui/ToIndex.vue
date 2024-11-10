<template>
    <NuxtLink to="/" class="link-item text-start">
        <i class="bi bi-house me-2"></i>{{ sourceText }}
    </NuxtLink>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    language: {
        type: String,
        default: 'en'
    }
});

const homeString = {
    en: "Home",
    es: "Inicio",
    fr: "Accueil",
    de: "Startseite",
    it: "Home",
    pt: "Início"
};

const sourceText = computed(() => homeString[props.language] || homeString.en);
</script>

<style scoped>
i{
    color:aliceblue;

}
</style>