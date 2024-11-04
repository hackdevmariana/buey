<script lang="ts" setup></script>

<template>
  
  <div class="container">
    <h1>Listados de eventos</h1>
    <br><hr><br>
    <ListEventNotice  day="05"
      month="noviembre"
      year="2024"
      startTime="10:00 AM"
      endingTime="12:00 PM"
      title="Reunión Anual"
      text="Únete a nosotros para nuestra reunión anual donde discutiremos los logros y planes futuros."
      link="https://ejemplo.com/evento" />
    <br><hr><br>
    <ListEventNoticeButton 
    day="15"
      month="diciembre"
      year="2024"
      startTime="09:00 AM"
      endingTime="11:00 AM"
      image="https://raw.githubusercontent.com/hackdevmariana/works-images/refs/heads/master/logo_buey.jpeg"
      title="Conferencia de Tecnología"
      text="Acompáñanos en esta conferencia donde exploraremos las tendencias tecnológicas para el próximo año."
      textButton="Inscribirse"
      linkButton="https://example.com/register"/>
    <br><hr><br>
  </div>
</template>

<style scoped></style>