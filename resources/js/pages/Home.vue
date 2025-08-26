<template>
  <section>
    <BannerVideo :banners="banners"/>
    <MensajeMain />
    <PresentacionMain /> 
    <RecetasMain />
    <!-- <ConoceMain /> -->
    <VideoMain />
    <PreguntasMain />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import apiClient from '@/utils/axios'; // ajusta la ruta si es diferente
import BannerVideo from '@/js/components/Banner.vue'; // ✅ IMPORTA EL COMPONENTE
import MensajeMain from '@/js/components/home/Mensaje.vue'; 
import PresentacionMain from '@/js/components/home/Presentacion.vue';
import RecetasMain from '@/js/components/home/Recetas.vue';
// import ConoceMain from '@/js/components/home/Conoce.vue';
import VideoMain from '@/js/components/home/Video.vue';
import PreguntasMain from '@/js/components/home/Preguntas.vue';


const banners = ref([]);

onMounted( async () => {
  document.title = 'Gloria | Raíces';
  let description = document.querySelector('meta[name="description"]');
  if (!description) {
    description = document.createElement('meta');
    description.setAttribute('name', 'description');
    description.setAttribute('content', 'Fuerza natural que impulsa tu día');
    document.head.appendChild(description);
  } else {
    description.setAttribute('content', 'Fuerza natural que impulsa tu día');
  }

})
</script>
