<template>
  <UiHeader />
  <br>
  <div class="container">
    <h1>Ejemplos de Iconos</h1>
    <br><br>

    <div class="row">
      <div class="col-12 col-md-4 mb-4" v-for="(icon, index) in icons" :key="index">
        <component :is="icon.component" class="icon-display" />

        <UiDownload :url="icon.url" language="es" /> ::

        <UiUsageExample :code="`<${icon.component} />`" language="es" />
      </div>
    </div>
  </div>

  <UiFooter />
</template>

<script setup>
import IconBitcoin from '@/components/icon/Bitcoin.vue'
import IconCheckedIcon from '@/components/icon/CheckedIcon.vue'
import IconDownload from '@/components/icon/Download.vue'
import IconErrorIcon from '@/components/icon/ErrorIcon.vue'
import IconGithub from '@/components/icon/Github.vue'
import IconTwitter from '@/components/icon/Twitter.vue'
import IconLinkedIn from '@/components/icon/LinkedIn.vue'
import IconFacebook from '@/components/icon/Facebook.vue'
import IconInstagram from '@/components/icon/Instagram.vue'
import IconEmail from '@/components/icon/Email.vue'
import IconShoppingCart from '@/components/icon/ShoppingCart.vue'
import IconPDF from '@/components/icon/PDF.vue'
import IconSettings from '@/components/icon/Settings.vue'
import IconSearch from '@/components/icon/Search.vue'

const icons = [
  { component: IconBitcoin, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/Bitcoin.vue' },
  { component: IconCheckedIcon, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/CheckedIcon.vue' },
  { component: IconDownload, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/Download.vue' },
  { component: IconErrorIcon, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/ErrorIcon.vue' },
  { component: IconGithub, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/Github.vue' },
  { component: IconTwitter, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/Twitter.vue' },
  { component: IconLinkedIn, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/LinkedIn.vue' },
  { component: IconFacebook, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/Facebook.vue' },
  { component: IconInstagram, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/Instagram.vue' },
  { component: IconEmail, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/Email.vue' },
  { component: IconShoppingCart, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/ShoppingCart.vue' },
  { component: IconPDF, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/PDF.vue' },
  { component: IconSettings, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/Settings.vue' },
  { component: IconSearch, url: 'https://raw.githubusercontent.com/hackdevmariana/buey/refs/heads/master/buey/components/icon/Search.vue' },
];
</script>

<style scoped>
.icon-display {
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>