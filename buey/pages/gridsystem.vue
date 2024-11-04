<template>

  <div class="container">
    <h2>Sistemas grid</h2>
    <ContainersDoubleHalf />
    <br><hr><br>
    <ContainersDoubleHalfNoMobile />
    <br><hr><br>

    <ContainersFourBoxes />
    <br><hr><br>
    <ContainersFourBoxesHalfHalfHalf />
    <br><hr><br>
    <ContainersFromFourToTwoTwo />
    <br><hr><br>
    <ContainersHalfDouble />
    <br><hr><br>
    <ContainersHalfDoubleNoMobile />
    <br><hr><br>
    <ContainersHalfTextHalfImage image="/modelo.jpg"
      title="Ejemplo de título"
      text="Este es un ejemplo de texto que aparecerá en el componente."/>
    <br><hr><br>
    <ContainersHalfImageHalfText image="/modelo.jpg"
      title="Ejemplo de título"
      text="Este es un ejemplo de texto que aparecerá en el componente."/>
    <br><hr><br>
    <ContainersIconNumberString icon="mdi:weather-sunny" 
      :number="27" 
      text="Sunny Day" 
      color="#FFD700" />
    <br><hr><br>
    <ContainersThreeTwoOneBox />
<br><hr><br>



    <ContainersOneFourBoxes />
<br><hr><br>

    <ContainersThreeBoxes />
    <br><hr><br>

    
    
    <ContainersTwoOne />

    <hr>
  </div>

</template>
