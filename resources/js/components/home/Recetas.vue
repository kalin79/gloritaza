<template>
    <div class="sectionRecetasHome" id="seccion2">
        <div class="headerTitleMain">
            <h3 class="titularMediano colorTxtCrema">Recetas Nutritivas</h3>
        </div>
        <div class="detallePresentacionGloria">
            <div class="containerFluid">
                <div class="gridContainer">
                    <div>
                        <img :src="slides[0]" alt="Imagen" />
                    </div>
                    <div>
                        <div class="infoProducto">
                            <!-- <h2>De la tierra a nuestra mesa</h2>
                            <p class="large">Tres semillas con historia</p> -->
                            <p>
                                Nuestras nuevas leches mantienen la practicidad de siempre. 
                                Para disfrutarlas, solo se debe diluir 
                                <span class="txtBold">Leche Gloria con Quinua o Leche Gloria con Quinua, Kiwicha y Cañihua </span>
                                con la misma cantidad de agua hervida y listo. También se puede disfrutar 
                                en diferentes recetas que a continuación compartimos:
                                <!-- <span class="txtBold">La quinua, kiwicha y cañihua</span> son un regalo de la tierra que ha alimentado generaciones desde tiempos ancestrales, y hoy siguen siendo valoradas en todo el mundo por su gran aporte nutricional. Son una fuente completa de proteínas vegetales, con todos los aminoácidos esenciales, destacando por su alta calidad. -->
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="visualizacionRecetasContainer">
            <div class="containerFluid">
                <Splide :options="options" class="splide-custom">
                    <SplideSlide>
                        <div class="cardProduct">
                            <div class="curvaContant">
                                <img :src="curvaImg" alt=""/>
                            </div>
                            <div class="iconRecetas">
                                <img :src="receta1" /> 
                            </div>
                            <div class="bodyInfo">
                                <h2>
                                    Leche con Quinua con <br />manzana
                                </h2>
                                <h3>(Cremoso bebible de quinua con manzana)</h3>
                                <div class="detalleIgredienteBody">
                                    <h4>Ingredientes</h4>
                                    <ul>
                                        <li>1 lata (390 g) de leche  Gloria con Quinua. </li>
                                        <li>250 ml de agua</li>
                                        <li>2 manzanas medianas (peladas y cortadas en cubitos) </li>
                                        <li>1 cucharada de miel de abejas o azúcar al gusto</li>
                                        <li>1/2 cucharada de canela en polvo </li>
                                        <li>1 cucharada de vainilla</li>
                                    </ul>
                                    <h4>Preparación:</h4>
                                    <ul>
                                        <li>
                                            1. Coloca los cubitos de manzana en una olla con el agua y la canela. Cocina a fuego medio por 5-7 minutos hasta que estén suaves. 
                                        </li>
                                        <li>
                                            2. Agrega la leche Gloria con Quinua, la miel o azúcar y la vainilla. Revuelve suavemente. 
                                        </li>
                                        <li>
                                            3. Retira del fuego y sirve 
                                        </li>
                                    </ul>
                                </div>
                                <div class="tagBox">Rinde 4 tazas</div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="cardProduct">
                            <div class="curvaContant">
                                <img :src="curvaImg" alt=""/>
                            </div>
                            <div class="iconRecetas">
                                <img :src="receta3" /> 
                            </div>
                            <div class="bodyInfo">
                                <h2>
                                    Leche con Quinua, Kiwicha y <br />Cañihua con avena con chocolate
                                </h2>
                                <h3>(Bebida andina de chocolate y avena)</h3>
                                <div class="detalleIgredienteBody">
                                    <h4>Ingredientes</h4>
                                    <ul>
                                        <li>1 lata (390 g) de leche Gloria con Quinua, Kiwicha y Cañihua. </li>
                                        <li>3 cucharadas de avena instantánea</li>
                                        <li>1 cucharada de cocoa sin azúcar o 2 cucharadas de chocolate rallado oscuro</li>
                                        <li>250 ml de agua </li>
                                        <li>3 cucharadas de azúcar</li>
                                        <li>1 cucharada de canela</li>
                                    </ul>
                                    <h4>Preparación:</h4>
                                    <ul>
                                        <li>
                                            1. En una olla pequeña, calienta la leche Gloria con Quinua, Kiwicha y Cañihua. 
                                        </li>
                                        <li>
                                            2. Agrega la avena y cocina a fuego medio por 5 minutos, removiendo para que no se pegue.
                                        </li>
                                        <li>
                                            3. Añade la cocoa (o chocolate rallado) y mezcla hasta que se disuelva completamente. 
                                        </li>
                                        <li>
                                            4. Si deseas más líquido, añade un poco de agua o leche adicional. 
                                        </li>
                                    </ul>
                                </div>
                                <div class="tagBox">Rinde 4 tazas</div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="cardProduct">
                            <div class="curvaContant">
                                <img :src="curvaImg" alt=""/>
                            </div>
                            <div class="iconRecetas">
                                <img :src="receta2" /> 
                            </div>
                            <div class="bodyInfo">
                                <h2>
                                    Leche con Quinua, Kiwicha y <br />Cañihua con algarrobina
                                </h2>
                                <h3>(Bebida energética andina con miel de algarrobina)</h3>
                                
                                <div class="detalleIgredienteBody">
                                    <h4>Ingredientes</h4>
                                    <ul>
                                        <li>1 lata (390 g) de leche con Gloria con Quinua, Kiwicha y Cañihua</li>
                                        <li>2 cucharadas colmadas de miel de algarrobina</li>
                                        <li>1 cucharada de extracto de vainilla  </li>
                                        <li>Pizca de nuez moscada</li>
                                        <li>250 ml de agua</li>
                                    </ul>
                                    <h4>Preparación:</h4>
                                    <ul>
                                        <li>
                                            1. En una ollita pequeña, calienta la leche Gloria con Quinua, Kiwicha y Cañihua y el agua a fuego bajo. 
                                        </li>
                                        <li>
                                            2. Agrega la miel de algarrobina, vainilla y nuez moscada.
                                        </li>
                                        <li>
                                            3. Remueve constantemente por 3-5 minutos sin dejar hervir.
                                        </li>
                                        <li>
                                            4. Sirve caliente o tibio en vasos resistentes.  
                                        </li>
                                    </ul>
                                </div>
                                <div class="tagBox">Rinde 3 vasos de 200 ml </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>    
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from 'gsap';
import '@splidejs/vue-splide/css';
const arrow2 = '/images/arrow2.svg';
const receta1 = '/images/receta1.svg';
const receta2 = '/images/receta2.svg';
const receta3 = '/images/receta3.svg';

// Lista de imágenes
const slides = ref([
  "/images/chica1.webp",
  "/images/p2.png",
  "/images/p1.png"
]);
const curvaImg = '/images/curva.png';

const current = ref(0);
const slidesRef = ref([]);
let autoPlay = null;
const options = {
    type: 'slide',
    perPage: 3,               // por defecto mostrar 3
    perMove: 1,
    gap: '1rem',
    pagination: true,
    arrows: false,
    autoplay: false,
    breakpoints: {
        992: {                  // <= 768px (tablet / móvil)
        perPage: 1,           // mostrar 1 elemento en móvil
        gap: '0.5rem',
        arrows: true,
        }
    },
}
const showSlide = (index) => {
    // Oculta todos
    slidesRef.value.forEach((el) =>
        gsap.to(el, { opacity: 0, duration: 0.5 })
    );
    // Muestra el actual
    gsap.to(slidesRef.value[index], { opacity: 1, duration: 1 });
    current.value = index;
};

const nextSlide = () => {
    current.value = (current.value + 1) % slides.value.length;
    showSlide(current.value);
};

const goToSlide = (index) => {
    clearInterval(autoPlay);
    showSlide(index);
    autoPlay = setInterval(nextSlide, 3000);
};

onMounted(() => {
    // Mostrar el primero
    showSlide(0);
    // Iniciar autoplay
    autoPlay = setInterval(nextSlide, 3000);
});

onBeforeUnmount(() => {
    clearInterval(autoPlay);
});
</script>