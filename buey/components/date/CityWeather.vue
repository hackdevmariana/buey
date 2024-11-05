<template>
  <div v-if="weatherData" class="weather-container">
    <p>Previsión del tiempo <br> {{ formattedDate }} <br> {{ weatherData.city.name }}, {{
    convertCountryCode(weatherData.city.country) }}</p>
    <Icon :name="stringToIcon(mainWeather)" class="icon-weather" />
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      weatherData: null,
      mainWeather: null,
      formattedDate: null
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es-ES', options);
    },

    stringToIcon(weather) {
      let icon = '';
      if (weather.toLowerCase() === 'clear sky') {
        icon = 'meteocons:clear-day-fill';
      } else if (weather.toLowerCase().includes('clouds')) {
        icon = 'meteocons:fog-day-fill';
      } else if (weather.toLowerCase().includes('thunderstorm')) {
        icon = 'meteocons:thunderstorms-fill';
      } else if (weather.toLowerCase().includes('drizzle')) {
        icon = 'meteocons:drizzle-fill';
      } else if (weather.toLowerCase().includes('rain')) {
        icon = 'meteocons:overcast-day-rain';
      } else if (['sleet', 'snow'].includes(weather)) {
        icon = 'meteocons:overcast-day-snow-fill';
      } else if (weather.toLowerCase() === 'squalls') {
        icon = 'meteocons:extreme-day-rain';
      } else if (['fog', 'mist', 'smoke', 'haze', 'sand', 'dust'].includes(weather)) {
        icon = 'meteocons:mist';
      } else if (weather.toLowerCase() === 'tornado') {
        icon = 'meteocons:tornado';
      } else {
        icon = '';
      }
      return icon;
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
    fetchWeatherData() {
      if (!this.date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        console.error('Invalid date format. Please use YYYY-MM-DD format.');
        return;
      }

      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=72e0703981983f1be43aa786a6e2164c`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.weatherData = data;
          const forecast = data.list.find(f => f.dt_txt.startsWith(`${this.date} `));
          if (forecast) {
            this.mainWeather = forecast.weather[0].main;
            this.formattedDate = this.formatDate(forecast.dt_txt);
          }
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }

  },
  created() {
    this.fetchWeatherData();
  }
};
</script>
<style scoped>
.icon-weather {

font-size: 10rem;
}

.weather-container{
  padding-top: 1rem;
  max-width: 450px;
  text-align: center;
  border: 1px solid #009ace;
  border-radius: 10px;
}
</style>