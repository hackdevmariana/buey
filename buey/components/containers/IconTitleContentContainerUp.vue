<template>
  <!-- <div class="component-container" v-aos="aosOptions"> -->
  <div 
    data-aos="fade-up"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom" 
    data-aos-offset="100"
    data-aos-duration="1000"
  >
    <div class="component-container">
      <div class="icon-column">
        <Icon :name="icon" />
      </div>
      <div class="content-container">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    content: String
  },
  data() {
    return {
      aosOptions: {
        duration: 1200,
        easing: 'ease',
        once: true
      }
    };
  }
};
</script>

<style scoped>
.component-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 1rem;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  transform: translateY(10px);
  transition: opacity .3s, transform .3s;
}

.component-container:hover {
  transform: translateY(-10px);
  transition: transform .3s;
}

.icon-column {
  flex: 0 0 10%;
  font-size: 4rem;
}

.content-container {
  flex: 1;
}
</style>