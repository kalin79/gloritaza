<template>
  <div>
    <Overlay
      v-if="store.visible"
      :color="store.color"
      :opacity="store.opacity"
      :receta="store.receta"
      @close="store.closeLightbox"
    />
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
    <!-- <CookieBanner /> -->
  </div>
</template>

<script setup>
import Header from '@/js/components/Header.vue';
import Footer from '@/js/components/Footer.vue';
// import CookieBanner from '@/js/components/CookieConsent.vue';
import Overlay from '@/js/components/Overlay.vue';

import { useLightboxStore } from '@/js/stores/useLightboxStore';

const store = useLightboxStore();
</script>
