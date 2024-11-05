<script setup></script>

<template>
  <div>
    <div class="container">
      <h1>Cards</h1>
      <ul>
        <CardBackgroundImage
          title="Explore the World"
          text="Discover new places and adventures around the globe."
          textButton="Learn More"
          link="https://example.com"
          titleLink="Learn more about the world"
          alt="Globe image"
          image="https://raw.githubusercontent.com/hackdevmariana/works-images/refs/heads/master/logo_buey.jpeg"
        />
        <CardBackgroundColor
          title="Welcome to Our Site"
          text="Explore our services and find what you need."
          textButton="Get Started"
          link="https://example.com"
          titleLink="Learn more about our services"
          color="#e74c3c"
        />

        <CardBackgroundHorizontalGradient
          title="Welcome to Nuxt"
          text="This card uses a horizontal gradient as the background."
          textButton="Click Here"
          link="https://example.com"
          titleLink="Example Website"
          color_1="#6a11cb"
          color_2="#2575fc"
        />

        <CardBackgroundVerticalGradient
          title="Welcome to Nuxt"
          text="This card uses a vertical gradient as the background."
          textButton="Click Here"
          link="https://example.com"
          titleLink="Example Website"
          color_1="#6a11cb"
          color_2="#2575fc"
        />

        <CardHighlightedEdge
  text="Learn more about Nuxt 3" 
  link="https://nuxt.com" 
  titleLink="Nuxt 3 Website" 
  image="https://raw.githubusercontent.com/hackdevmariana/works-images/refs/heads/master/logo_buey.jpeg" 
  alt="Nuxt Logo" 
  background="#e3f2fd" 
  borderColor="#ccc" 
  borderColorHover="#1976d2" 
  borderSize="4px" 
/>

<CardIconTitleText 
iconName="bitcoin-icons:bitcoin-circle-filled" 
    title="Bitcoin Icon" 
    text="This icon represents Bitcoin."
  />

      </ul>
    </div>
  </div>
</template>

<style scoped></style>
