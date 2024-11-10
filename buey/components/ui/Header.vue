<template>
    <div class="total">

      <div class="inline-components">
        <UiToIndex language="es" />
        <LayoutVerticalMenu />
      </div>
    </div>


</template>

<style scoped>
.inline-components{

    display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 70%;
  margin-left: 15%;

}
a{
    color:aliceblue;
}
i{
    color:aliceblue;

}

.total{
    width: 100%;
    border-bottom: thick double #32a1ce;
    padding: 1rem;
    background-color: #001b4f;
    color: white;

}
</style>