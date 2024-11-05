<template>
  <div v-if="weatherData">
    <div class="container-50 weather">
      <div class="row">
        <div class="col col-center">
          <span class="city">{{ weatherData.name }}, {{ convertCountryCode(weatherData.sys.country) }}</span><br />
          {{ stringToEs(weatherData.weather[0].description) }} <br />
          <Icon :name="stringToIcon(weatherData.weather[0].description, isNight())" class="icon-weather" />
          <br />
          {{ weatherData.weather[0].description }}
          {{ isNight() }}
          {{ weatherData.weather[0].description }}
        </div>
        <div class="col d-none d-lg-block">
          <p>Temperatura: {{ kelvinToCelsius(weatherData.main.temp) }} °C <br />
            Sensación térmica: {{ kelvinToCelsius(weatherData.main.feels_like) }} °C<br />
            Temperatura mínima: {{ kelvinToCelsius(weatherData.main.temp_min) }} °C<br />
            Temperatura máxima: {{ kelvinToCelsius(weatherData.main.temp_max) }} °C<br />
            Presión: {{ weatherData.main.pressure }} hPa<br />
            Humedad: {{ weatherData.main.humidity }}%<br />
            Velocidad del viento: {{ weatherData.wind.speed }} m/s</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <span class="loading-icon">
      <Icon name="line-md:downloading-loop" />
    </span>
    <span class="loading-text">
      Cargando datos...</span>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      weatherData: null,
    };
  },
  methods: {
    fetchWeather() {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=72e0703981983f1be43aa786a6e2164c`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.weatherData = data;
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    },
    convertCountryCode(code) {
      // Aquí puedes definir tus propias conversiones según tus necesidades
      if (code === 'ES') {
        return 'España';
      } if (code === 'MX') {
        return 'Méjico';
      } if (code === 'AR') {
        return 'Argentina';
      } if (code === 'PE') {
        return 'Perú';
      } if (code === 'SV') {
        return 'El Salvador';
      } if (code === 'UY') {
        return 'Uruguay';
      } if (code === 'CL') {
        return 'Chile';
      } if (code === 'PY') {
        return 'Paraguay';
      } if (code === 'GT') {
        return 'Guatemala';
      } if (code === 'NH') {
        return 'Honduras';
      } if (code === 'GT') {
        return 'Guatemala';
      } if (code === 'PH') {
        return 'Filipinas';
      } if (code === 'CO') {
        return 'Colombia';
      } if (code === 'PT') {
        return 'Portugal';
      } if (code === 'CU') {
        return 'Cuba';
      } if (code === 'VE') {
        return 'Venezuela';
      } else {
        return code;
      }
    },
    kelvinToCelsius(temp) {
      return (temp - 273.15).toFixed(2); // Conversión de Kelvin a Celsius
    },
    stringToIcon(weather, isNight) {
      let icon = '';
      if (weather.toLowerCase() === 'clear sky') {
        icon = isNight ? 'meteocons:clear-night-fill' : 'meteocons:clear-day-fill';
      } else if (weather.toLowerCase().includes('clouds')) {
        icon = isNight ? 'meteocons:fog-night-fill' : 'meteocons:fog-day-fill';
      } else if (weather.toLowerCase().includes('thunderstorm')) {
        icon = isNight ? 'meteocons:thunderstorms-night' : 'meteocons:thunderstorms-fill';
      } else if (weather.toLowerCase().includes('drizzle')) {
        icon = isNight ? 'meteocons:drizzle' : 'meteocons:drizzle-fill';
      } else if (weather.toLowerCase().includes('rain')) {
        icon = isNight ? 'meteocons:extreme-rain' : 'meteocons:overcast-day-rain';
      } else if (['sleet', 'snow'].includes(weather.toLowerCase())) {
        icon = isNight ? 'meteocons:extreme-night-snow' : 'meteocons:overcast-day-snow-fill';
      } else if (weather.toLowerCase().toLowerCase() === 'squalls') {
        icon = isNight ? 'meteocons:extreme-rain' : 'meteocons:extreme-day-rain';
      } else if (['fog', 'mist', 'smoke', 'haze', 'sand', 'dust'].includes(weather)) {
        icon = 'meteocons:mist';
      } else if (weather.toLowerCase() === 'tornado') {
        icon = 'meteocons:tornado';
      } else {
        icon = '';
      }
      return icon;
    },
    

    stringToEs(weather) {
      // Aquí puedes definir tus propias conversiones según tus necesidades
      if (weather === 'clear sky') {
        return 'Sin nubes';
      } else if (['scattered clouds', 'broken clouds', 'few clouds'].includes(weather)) {
        return 'Nubes dispersas';

      } else {
        return code;
      }
    },
    isNight() {
      if (!this.weatherData || !this.weatherData.sys || !this.weatherData.sys.sunrise || !this.weatherData.sys.sunset) {
        return false;
      }
      const now = new Date().getTime() / 1000; // Hora actual en segundos
      const sunrise = this.weatherData.sys.sunrise;
      const sunset = this.weatherData.sys.sunset;
      return now < sunrise || now > sunset;
    },

  },
  mounted() {
    this.fetchWeather();
  },
};
</script>

<style scoped>
.loading-icon {
  font-size: 5rem;
}

.loading-text {
  font-size: 3rem;
}

.weather {
  border-radius: 5px;
  background-color: var(--pastel-green);
  border: 1px solid var(--border-color);
}

.city {
  text-align: center;
  font-size: 1.4rem;
}

.icon-weather {

  font-size: 10rem;
}

.col-center {
  text-align: center;
}
</style>
