<script lang="ts" setup>
</script>

<template>

<div class="container">
  <!-- Sección de título e imagen centrada -->
  <div class="d-flex flex-column align-items-center my-4">
    <h1 class="text-center">Demo Buey</h1>
    <ImagesRoundedImage 
      imgPath="https://raw.githubusercontent.com/hackdevmariana/works-images/refs/heads/master/logo_buey.jpeg" 
      class="rounded-circle img-fluid shadow mt-3" 
      style="width: 150px; height: 150px;" 
    />
  </div>

  <!-- Listado mejorado con marcos, efectos hover y diseño responsivo -->
  <ul class="menu-list text-center d-flex flex-wrap justify-content-center">
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/interactions" class="link-item text-start">
        <i class="bi bi-gear-fill me-2 text-primary"></i> Componentes con interacción
      </NuxtLink>
    </li>
    
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/emojis" class="link-item text-start">
        <i class="bi bi-emoji-smile-fill me-2 text-warning"></i> Emojis
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/effectsletters" class="link-item text-start">
        <i class="bi bi-type me-2 text-success"></i> Efectos con letras
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/calltoactions" class="link-item text-start">
        <i class="bi bi-megaphone-fill me-2 text-danger"></i> Llamadas a la acción
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/gridsystem" class="link-item text-start">
        <i class="bi bi-grid-3x3-gap-fill me-2 text-info"></i> Tipos de grids
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/images" class="link-item text-start">
        <i class="bi bi-image-fill me-2 text-secondary"></i> Efectos sobre imágenes
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/lists" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Listados
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/banner" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Banners
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/users" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Información de usuarios
      </NuxtLink>
    </li>

    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/date" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Fechas y eventos
      </NuxtLink>
    </li>

    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/icons" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Iconos
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/inline" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> En linea (in line)
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/list" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Listados de eventos
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/buttons" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Botones
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/dropdown" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Dropdown
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/tabs" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Pestañas
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/modals" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Modales
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/poster" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Mostrar poster
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/cards" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Tarjetas (cards)
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/textmotion" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Texto en movimiento
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/ui" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Elementos UI
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/youtubeid" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Mostrar vídeo de Youtube por ID
      </NuxtLink>
    </li>
    <li class="col-6 col-md-3 my-2 mx-2">
      <NuxtLink to="/youtubeurl" class="link-item text-start">
        <i class="bi bi-list-ul me-2 text-dark"></i> Mostrar vídeo de Youtube por URL
      </NuxtLink>
    </li>
  </ul>

  <hr class="mt-4">
</div>

  <div class="container">

    <h3>Ejemplos de iconos encapsulados en contenedores:</h3>
    <br>
<LineChecked text="Aceptado" />
<LineError text="Error" />
<LineHappy text="I Like" />
<LineThumbsUp text="Happy Hacking" />
<LineAuthor text="Pepe Perez" />
<LineAuthor text="Pepe Perez" link="https://google.es" />
<LineDate text="03/05/1980"/>
<LineDate text="03/05/1980" link="https://google.es" />
<!-- <CalltoactionFramePrimary text="Happy hacking" /> -->
<LineCopyright text="Yo mismo" link="https://google.es" />
<LineCopyleft text="Yo mismo" link="https://google.es" />
<hr>

<h3>Ejemplos de grids encapsulados en contenedores:</h3>
    <br>
<ContainersTwoLinesTwoThree />

<br>
<ContainersTenContainersFourColumns />
<br>
<ContainersFromFourToTwoTwo />
<br>
<ContainersOneTwo />

<h3>Ejemplos de efectos de textos encapsulados en contenedores:</h3>
    <br>
<LabelTextFullWidth text="Texto de prueba" />
<br>
Texto fijo
<TextmotionTextFixedAndTypewriter text="Texto fijo con texto aleatorio animado:" animated1="Uno" animated2="Dos" animated3="Tres" animated4="Cuatro" animated5="Cinco" />
<hr>
Enlaces con distintos hovers <br>
<HoverLinkUnderlining text="Enlace subrayado" link="https://google.es" /> <br>
<HoverBackgroundGrowing text="Enlace con cambio de fondo" link="https://google.es" /> 
<HoverGrowingImage image="/modelo.jpg" /> 

<hr>
Letreros <br>
<hr>

<BannerLeftAlignedText text="Texto de prueba" />
<LabelTextBetweenLines text="Texto de prueba" />
<LabelTextAndSubtextBetweenLines text="Texto de prueba" subtext="Segunda línea" />

<ContainersSixSameBackgroundColor />




</div>
</template>

<style scoped>

.menu-list {
  width: 100%;
}

.link-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* Asigna el mismo ancho a todos los elementos */
  padding: 0.5rem;
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.link-item:hover {
  background-color: var(--color-primary);
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.link-item i {
  transition: color 0.3s ease;
}

.link-item:hover i {
  color: white;
}
</style>
