<template>
  <div class="box-content d-flex align-items-center justify-content-between">
    <Icon :name="icon" :style="{ color: color }" class="icon"/>
    <div  class="ms-2 p-2">
      <div class="number">{{ number }}</div>
      <div :style="{ backgroundColor: color }" class="string">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.box-content{
  width: 100%;
}

.icon{
  font-size: 5rem;
}

.string{
  padding: 0.4rem;
  border-radius: 5px;
  font-size: .8rem;
}

.number{
  font-size: 1.5rem;
  margin-bottom: .2rem;
  text-align: right;
}
</style>
