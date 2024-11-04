<script lang="ts" setup>
import CityWeather from '~/components/date/CityWeather.vue';
import CityWeatherToday from '~/components/date/CityWeatherToday.vue';
</script>

<template>
  <div>
    <div class="container">
      <h1>Fechas y eventos</h1>
      <ul>
        
        <DateCityWeather :city="'Madrid'" :date="'2024-11-03'" />
<br><hr><br>
        <DateCityWeatherToday  :city="'Madrid'"/>
<br><hr><br>

        <DateEvent />


        <br>


      </ul>
    </div>
  </div>
</template>

<style scoped></style>