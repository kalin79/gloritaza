<template>
    <section>
        <BannerComponent />
        <GloritazaComponent />
        <MapaComponent />
        <PreguntasComponent />
    </section>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import { onMounted } from 'vue';
import MapaComponent from '@/js/components/maps/map.vue';
import BannerComponent from '@/js/components/home/Banner.vue';
import GloritazaComponent from '@/js/components/home/Gloritaza.vue';
import PreguntasComponent from '@/js/components/home/Preguntas.vue';

useHead({
  title: 'Canjea tu Gloritaza | Promoción Oficial Leche Gloria',
  meta: [
    { name: 'description', content: 'Participa en la promoción oficial de Leche Gloria. Canjea tu Gloritaza con 3 etiquetas + S/3.50. Encuentra tu punto de canje más cercano y no te quedes sin la tuya.' },
    { name: 'keywords', content: 'Gloritaza Gloria, canje gloritaza, promoción Gloria, taza Gloria, promo leche Gloria' },
    { property: 'og:title', content: '¡Canjea tu Gloritaza Hoy! | Promoción Leche Gloria' },
    { property: 'og:description', content: 'Canjea tu Gloritaza con 3 etiquetas de Leche Gloria + S/3.50. Consulta los puntos de canje y participa antes de que se acaben.' },
    { property: 'og:image', content: 'https://gloria.pe/assets/gloritaza/og-image.jpg' },
    { property: 'og:url', content: 'https://gloria.pe/promociones/gloritaza' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '¡Canjea tu Gloritaza Hoy!' },
    { name: 'twitter:description', content: 'Participa en la promoción oficial y canjea tu Gloritaza. Encuentra tu punto de canje más cercano.' },
    { name: 'twitter:image', content: 'https://gloria.pe/assets/gloritaza/og-image.jpg' },
    { name: 'twitter:site', content: '@LecheGloria' }
  ],
  link: [
    { rel: 'canonical', href: 'https://gloria.pe/promociones/gloritaza' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Gloritaza Leche Gloria",
        "image": "https://gloria.pe/assets/gloritaza/og-image.jpg",
        "description": "Canjea tu Gloritaza con 3 etiquetas de Leche Gloria + S/3.50. Promoción válida hasta el 31 de octubre.",
        "brand": { "@type": "Brand", "name": "Leche Gloria" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PEN",
          "price": "3.50",
          "availability": "https://schema.org/InStock",
          "url": "https://gloria.pe/promociones/gloritaza",
          "priceValidUntil" : "2025-10-31"
        }
      })
    }
  ]
})
</script>
