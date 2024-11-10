<script lang="ts" setup>

</script>

<template>
  <div>
    <UiHeader />

    <div class="container">


      <h1>Componentes con interacción</h1>
      <ul>
        <li>PluralizeEs -> Devuelve una palabra en plural</li>
        <PluralizeEs />
        <br>
        <li>RandomColors -> Devuelve un color aleatorio en distintos formatos</li>
        <ColorsRandomColors />
        <ColorsConvertColorMode />

        <h3>ColorsRandomPalette</h3>
        <ColorsRandomPalette />
        <UiDownload
          url="https://raw.githubusercontent.com/hackdevmariana/buey/master/buey/components/colors/RandomPalette.vue"
          language="es" /> ::
        <UiSource code="<h1>Hello, world!</h1>" language="es" /> ::
        <UiUsageExample code="console.log('Hola mundo');" language="es" />

        <br>

        <NuxtLink to="/searchpixabay" class="link-item text-start">
          <i class="bi bi-list-ul me-2 text-dark"></i> Buscar en Pixabay
        </NuxtLink>
        <NuxtLink to="/searchvideospixabay" class="link-item text-start">
          <i class="bi bi-list-ul me-2 text-dark"></i> Buscar vídeos en Pixabay
        </NuxtLink>
        <br>


      </ul>
    </div>
  </div>
  <UiFooter />
</template>

<style scoped>
a {
  color: black;
}


</style>
