<template>
    <div>
        <Overlay :color="colorOverlay" :opacity="1" />
        <div :class="['itemCarruselContainer', bgColor || '']">
            <div class="headerTitleCarrusel">
                <div class="florContainer" >
                    <img :src="imgFlor"  />
                </div>
                    <!-- Línea <span class="fontEditorialItalic txtVerde">Terapeútica</span> -->

                <h2 class="titularExtraGrande fontPoppins fontWeight300 txtNegro txtLineHeight" v-html="categoria.categoria"></h2>
            </div>
            <div class="listaCarruselBox">
                <Splide :options="options" class="splide-custom customListCarrusel">
                    <SplideSlide v-for="(carrusel, index) in categoria.productos" :key="index">
                        <div class="cardProduct" @click="goToProducto(carrusel.slug, categoria.bgColor)">
                            <div class="imgContainerCard">
                                <img :src="carrusel.img" alt="Slide" />
                            </div>
                            <div class="btnCar">
                                <img :src="imgBolsa" alt="Slide" />
                            </div>
                            <div class="footerCar">
                                <div>
                                    <h3 class="DescripcionPequeno fontWeight600 txtVerde" v-html="carrusel.subcategoria"></h3>
                                    <p class="DescripcionPequeno" v-html="carrusel.titulo"></p>
                                </div>
                                <div>
                                    <p class="DescripcionPequeno">{{ carrusel.precio }}</p>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import Overlay from '@/js/components/Overlay.vue';

    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import { useRouter } from 'vue-router';
    import '@splidejs/vue-splide/css';
    
    const colorOverlay = ref('bgVerde');

    defineProps({
        categoria: Object,
        bgColor: {
            type: String,
            required: false,
            default: ''
        }
    });

    const router = useRouter();

    const imgFlor = '/images/frontend/flor2.png';
    const imgBolsa = '/images/frontend/bolsa.svg';
    const options = {
        type: 'loop',
        perPage: 3,
        gap: '1rem',
        pagination: false,
        arrows: true,
        breakpoints: {
            992: {
                perPage: 2,
            }
        }
    }

    function goToProducto(slug, color) {
        if (color === ''){
            colorOverlay.value = 'bgVerde';
        }else{
            colorOverlay.value = color;
        }
        // Mostrar overlay
        if (typeof window.showTransition === 'function') {
            window.showTransition()
        } else {
            console.warn('showTransition no está disponible aún');
        }

        // Esperar animación y luego navegar
        setTimeout(() => {
            router.push(`/producto/${slug}`);
        }, 500) // misma duración que la animación GSAP
    }
    

</script>